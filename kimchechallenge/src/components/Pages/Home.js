import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/slices/country.slice';
import { setFilter } from '../../redux/slices/filter.slice';
import { reduceContinent } from '../../utils/reduceContinent';
import { reduceLanguage } from '../../utils/reduceLanguage.js';
import { ContainerResult } from '../Containers/Container.Result';
import Filters from '../Organisms/Filters';
import Header from '../Organisms/Header';
import SearchResult from '../Organisms/ResultField/SearchResult';

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);
  const { continent, search } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch, countries]);

  const filterByContinent = useCallback((searchContinent) => {
    const data = countries
      .filter((country) => country.name.includes(searchContinent));

    const result = reduceContinent(data);

    dispatch(setFilter(result));
  }, [dispatch, countries]);

  const filterByLanguage = useCallback((searchLanguage) => {
    const data = countries
      .filter((country) => country.name.includes(searchLanguage));
    const result = reduceLanguage(data);
    dispatch(setFilter(result));
  }, [dispatch, countries]);

  useEffect(() => {
    if (continent) {
      filterByContinent(search);
    } else {
      filterByLanguage(search);
    }
  }, [search, continent, filterByContinent, filterByLanguage]);
  return (
    <div>
      <Header />
      <Filters />
      <ContainerResult>
        <SearchResult />
      </ContainerResult>
    </div>
  );
}
