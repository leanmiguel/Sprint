import { ApolloClient, HttpLink } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import withApollo from 'next-with-apollo';

const SERVER = ' http://localhost:4000/';

const link = new HttpLink({
  uri: SERVER,
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
