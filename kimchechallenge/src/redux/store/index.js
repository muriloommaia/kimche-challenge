import { configureStore } from '@reduxjs/toolkit';
import countrySlice from '../slices/country.slice';

export const store = configureStore({
  reducer: {
    countries: countrySlice,
  },
});
