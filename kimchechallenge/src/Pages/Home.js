import React from 'react';
import { MediaScreen } from '../components/Containers/Container.media';
import { ContainerResult } from '../components/Containers/Container.Result';
import { Flex } from '../components/Containers/Flex';
import Filters from '../components/Organisms/Filters';
import Footer from '../components/Organisms/Footer';
import Header from '../components/Organisms/Header';
import SearchResult from '../components/Organisms/ResultField/SearchResult';
import { useCountry } from '../Hooks/useCountry';

export default function Home() {
  useCountry();
  return (
    <Flex
      direction='column'
      justify='space-between'
      minHeight='100vh'
    >
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
    </Flex>
  );
}
