import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from './api/client';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>
          My first Apollo app
          {' '}
          <span role='img' aria-label='Rocket'>
            🚀
          </span>
        </h2>
      </div>
    </ApolloProvider>
  );
}
export default App;
