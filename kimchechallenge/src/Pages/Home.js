import React from 'react';
import { MediaScreen } from '../components/Containers/Container.media';
import { ContainerResult } from '../components/Containers/Container.Result';
import Filters from '../components/Organisms/Filters';
import Footer from '../components/Organisms/Footer';
import Header from '../components/Organisms/Header';
import SearchResult from '../components/Organisms/ResultField/SearchResult';
import { useCountry } from '../Hooks/useCountry';

export default function Home() {
  useCountry();
  return (
    <div>
      <Header />
      <MediaScreen
        xlWidth='1280px'
        xlMargin='auto'
      >
        <Filters />
        <ContainerResult>
          <SearchResult />
        </ContainerResult>
      </MediaScreen>
      <Footer />
    </div>
  );
}
