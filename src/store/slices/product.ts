import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../../interfaces/product';
import {pop} from '../../RootNavigation';
import {api} from '../axios';
import {AppDispatch} from '../store';
import {startLoading, stopLoading} from './app';

const slice = createSlice({
  name: 'product',
  initialState: {
    allProducts: [],
    products: [],
    product: {},
    newProductPayload: {},
  },
  reducers: {
    setProducts: (state, action) => {
      action.payload.type === 'all'
        ? (state.allProducts = action.payload.data)
        : {};
      state.products = action.payload.data;
    },
    addProduct: (state, action) => {
      state.allProducts.push(action.payload.data);
      pop();
    },
  },
});

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    let response = await api.get('/products');
    dispatch(
      slice.actions.setProducts({
        data: response.data,
        type: 'all',
      }),
    );
    dispatch(stopLoading());
  } catch (e) {
    dispatch(stopLoading());
  }
};

export const addProduct =
  (product: IProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(startLoading());
      let response = await api.post('/products', product);
      if (response.status === 201) {
        dispatch(
          slice.actions.addProduct({
            data: product,
          }),
        );
      }
      dispatch(stopLoading());
    } catch (e) {
      dispatch(stopLoading());
    }
  };

export const filterProducts =
  (products: IProduct[], category: string) => async (dispatch: AppDispatch) => {
    let filteredProducts = products.filter(
      product => product.category === category || category === 'all',
    );
    dispatch(
      slice.actions.setProducts({data: filteredProducts, type: 'filter'}),
    );
  };

export default slice.reducer;
