import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filter',
  initialState: {
    continent: true,
    search: '',
  },
  reducers: {
    setGroup(state, { payload }) {
      return { ...state, continent: payload };
    },
    setSearch(state, { payload }) {
      return { ...state, search: payload };
    },
  },
});

export const { setGroup, setSearch } = slice.actions;

export default slice.reducer;
