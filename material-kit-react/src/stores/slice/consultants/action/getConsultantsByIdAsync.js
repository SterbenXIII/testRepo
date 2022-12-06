import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { environment } from '../../../../environment';

export const getConsultantsByIdAsync = createAsyncThunk(`consultants/id`, async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`consultants/${id}`, {
      headers: {
        'X-Authorization': environment.apiKey,
      },
    });

    return data.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
