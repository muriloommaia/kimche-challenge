import React from 'react';
import { ContainerResult } from '../Containers/Container.Result';
import Filters from '../Organisms/Filters';
import Header from '../Organisms/Header';
import SearchResult from '../Organisms/ResultField/SearchResult';

export default function Home() {
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
