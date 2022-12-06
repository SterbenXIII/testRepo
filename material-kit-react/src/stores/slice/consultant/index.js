import { createSlice } from '@reduxjs/toolkit';

import { getConsultantsByIdAsync } from './action/getConsultantsByIdAsync';

const initialState = {
  isFetching: false,
  errorMessage: null,
  consultant: null,
};

export const consultantSlice = createSlice({
  name: 'consultant',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isFetching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getConsultantsByIdAsync.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.errorMessage = null;
      state.consultant = payload;
    });
    builder.addCase(getConsultantsByIdAsync.rejected, (state, { payload }) => {
      state.errorMessage = payload;
      state.isFetching = false;
    });
    builder.addCase(getConsultantsByIdAsync.pending, (state) => {
      state.errorMessage = null;
      state.isFetching = true;
    });
  },
});

export const { clearState } = consultantSlice.actions;

export const consultantsSelector = (state) => state.consultants;
