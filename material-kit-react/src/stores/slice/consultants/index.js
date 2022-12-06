import { createSlice } from '@reduxjs/toolkit';

import { getConsultantsAsync } from './action/getConsultantsAsync';

const initialState = {
  isFetching: false,
  errorMessage: null,
  consultantsList: [],
};

export const consultantsSlice = createSlice({
  name: 'consultants',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isFetching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getConsultantsAsync.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.errorMessage = null;
      state.consultantsList = payload;
    });

    builder.addCase(getConsultantsAsync.rejected, (state, { payload }) => {
      state.errorMessage = payload;
      state.isFetching = false;
    });
    builder.addCase(getConsultantsAsync.pending, (state) => {
      state.errorMessage = null;
      state.isFetching = true;
    });
  },
});

export const { clearState } = consultantsSlice.actions;

export const consultantsSelector = (state) => state.consultants;
