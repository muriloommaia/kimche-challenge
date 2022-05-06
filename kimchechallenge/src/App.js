import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from './api/client';
import './App.css';
import Home from './components/Pages/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Home />
      </div>
    </ApolloProvider>
  );
}
export default App;
