import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const SERVER = 'http://localhost:4000/';

export default new ApolloClient({
  link: new HttpLink({
    uri: SERVER,
  }),
  cache: new InMemoryCache(),
});
