import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { environment } from '../../../../environment';
import { setTokenLocalStorage } from '../../../../helpers/localStorage';

const backendURL = environment.apiUrl;

export const loginUserAsync = createAsyncThunk(
  `${backendURL}user/login`,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${backendURL}auth/login?email=${email}&password=${password}`,
        {},
        {
          headers: {
            'X-Authorization': environment.apiKey,
          },
        }
      );

      setTokenLocalStorage(data.token);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
