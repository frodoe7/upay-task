import {createSlice} from '@reduxjs/toolkit';
import {AppDispatch} from '../store';

const slice = createSlice({
  name: 'app',
  initialState: {
    loading: false as boolean,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const startLoading = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.setLoading({loading: true}));
};

export const stopLoading = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.setLoading({loading: false}));
};

export default slice.reducer;
