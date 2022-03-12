import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from '../../interfaces/product';
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
    getProduct: (state, action) => {},
    createProduct: (state, action) => {},
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
  } catch (e) {
    dispatch(stopLoading());
  }
};

export const filterProducts =
  (products: IProduct[], category: string) => async (dispatch: AppDispatch) => {
    let filteredProducts = products.filter(
      product => product.category === category || category === 'all',
    );
    console.log(filteredProducts);
    dispatch(
      slice.actions.setProducts({data: filteredProducts, type: 'filter'}),
    );
  };

export default slice.reducer;
