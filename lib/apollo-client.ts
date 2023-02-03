import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

function createApollo() {
    return new ApolloClient({
      uri: 'http://localhost:3333/',
      cache: new InMemoryCache(),
    });
};

export function useApollo() {
    const client = createApollo();
    return client;
};