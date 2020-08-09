import { ApolloProvider } from '@apollo/client';

import '../styles.css';
import { UserProvider } from '../components/context/UserContext';

import apollo from '../libs/apollo';
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apollo}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  );
}

export default MyApp;
