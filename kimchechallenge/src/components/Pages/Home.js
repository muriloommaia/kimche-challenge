import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/slices/country.slice';
import { setFilter } from '../../redux/slices/filter.slice';
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
