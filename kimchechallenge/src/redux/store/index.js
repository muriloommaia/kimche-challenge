import { configureStore } from '@reduxjs/toolkit';
import countrySlice from '../slices/country.slice';
import filterSlice from '../slices/filter.slice';

export const store = configureStore({
  reducer: {
    countries: countrySlice,
    filter: filterSlice,
  },
});
