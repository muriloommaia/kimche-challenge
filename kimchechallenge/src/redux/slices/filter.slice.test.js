import filterSlice, { setFilter, setGroup, setSearch } from './filter.slice';

const initialState = {
  continent: true,
  search: '',
  filtered: [],
};
test('should return the initial state', () => {
  expect(filterSlice(undefined, {})).toEqual(initialState);
});

describe('test actions FilterSlice', () => {
  test('setSearch change the state', () => {
    const payload = 'test';
    const action = setSearch(payload);
    expect(filterSlice(initialState, action)).toEqual({
      ...initialState,
      search: payload,
    });
  });

  test('setGroup change the state', () => {
    const payload = false;
    const action = setGroup(payload);
    expect(filterSlice(initialState, action)).toEqual({
      ...initialState,
      continent: payload,
    });
  });
  test('setFilter change the state', () => {
    const payload = [{ name: 'test' }];
    const action = setFilter(payload);
    expect(filterSlice(initialState, action)).toEqual({
      ...initialState,
      filtered: payload,
    });
  });
});
