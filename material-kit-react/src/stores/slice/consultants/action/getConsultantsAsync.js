import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { environment } from '../../../../environment';

export const getConsultantsAsync = createAsyncThunk(`consultants`, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`consultants`, {
      headers: {
        'X-Authorization': environment.apiKey,
      },
    });

    return data.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
