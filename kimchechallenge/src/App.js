import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import client from './api/client';
import './App.css';
import Home from './Pages/Home';
import { theme } from './Style/themeStyle';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
}
export default App;
