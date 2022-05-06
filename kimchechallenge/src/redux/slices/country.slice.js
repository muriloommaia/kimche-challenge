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
    continent: true,
  },
  reducers: {
    setGroup(state, { payload }) {
      return { ...state, continent: payload };
    },
  },
  extraReducers: {
    [getCountries.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setGroup } = slice.actions;

export default slice.reducer;
