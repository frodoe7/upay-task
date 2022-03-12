import {createSlice} from '@reduxjs/toolkit';
import {api} from '../axios';
import {AppDispatch} from '../store';
import {startLoading, stopLoading} from './app';

const slice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    active: 'all',
  },
  reducers: {
    categoriesFetched: (state, action) => {
      state.categories = action.payload.data;
    },
    setActive: (state, action) => {
      state.active = action.payload.active;
    },
  },
});

export const fetchCategories = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    let response = await api.get('/categories');
    dispatch(
      slice.actions.categoriesFetched({
        data: [...[{name: 'all'}], ...response.data],
      }),
    );
  } catch (e) {
    dispatch(stopLoading());
  }
};

export const setActive = (active: string) => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.setActive({active}));
};

export default slice.reducer;
