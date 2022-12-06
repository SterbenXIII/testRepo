import { createSlice } from '@reduxjs/toolkit';

import { loginUserAsync } from './actions/loginUserAsync';

const initialState = {
  isFetching: false,
  errorMessage: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isFetching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserAsync.fulfilled, (state) => {
      state.isFetching = false;
      state.errorMessage = null;
    });
    builder.addCase(loginUserAsync.rejected, (state, { payload }) => {
      state.errorMessage = payload;
      state.isFetching = false;
    });
    builder.addCase(loginUserAsync.pending, (state) => {
      state.errorMessage = null;
      state.isFetching = true;
    });
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
