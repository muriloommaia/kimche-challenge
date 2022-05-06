/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { countryService } from '../../services/countryService';

export const getCountries = createAsyncThunk(
  'country/getCountries',
  async (thunkApi) => {
    const { data } = await countryService.getCountries();

    return data.countries;
  },
);

export const slice = createSlice({
  name: 'country',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getCountries.pending]: (state) => {
      state.loading = true;
    },
    [getCountries.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getCountries.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default slice.reducer;
