import React from 'react';
import { ContainerResult } from '../components/Containers/Container.Result';
import Filters from '../components/Organisms/Filters';
import Header from '../components/Organisms/Header';
import SearchResult from '../components/Organisms/ResultField/SearchResult';
import { useCountry } from '../Hooks/useCountry';

export default function Home() {
  useCountry();
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
