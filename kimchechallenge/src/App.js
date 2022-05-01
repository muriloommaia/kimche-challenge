import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './api/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>
          My first Apollo app
          {' '}
          <span role="img" aria-label="Rocket">
            🚀
          </span>
        </h2>
      </div>
    </ApolloProvider>
  );
}
export default App;

