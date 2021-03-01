import React from 'react'
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/config';
import Router from './router/Router';

function App() {

  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
