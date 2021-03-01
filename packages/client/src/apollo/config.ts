import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { isLoggedInVar } from './auth';

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError, forward, operation,response }) => {
  // console.log(graphQLErrors, networkError)
  // console.log(graphQLErrors && graphQLErrors[0]?.extensions?.exception.status)
  if (graphQLErrors){
    const status =  graphQLErrors[0]?.extensions?.exception.status;
    if(status === 403){
      isLoggedInVar(false);
      forward(operation)
    }

    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);

});

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql',
})


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: from([link, new HttpLink({uri: '/graphql'})])
  link: from([errorLink, httpLink])
});