import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filter',
  initialState: {
    continent: true,
    search: '',
    filtered: [],
  },
  reducers: {
    setGroup(state, { payload }) {
      return { ...state, continent: payload };
    },
    setSearch(state, { payload }) {
      return { ...state, search: payload };
    },
    setFilter(state, { payload }) {
      return { ...state, filtered: payload };
    },
  },
});

export const { setGroup, setSearch, setFilter } = slice.actions;

export default slice.reducer;
