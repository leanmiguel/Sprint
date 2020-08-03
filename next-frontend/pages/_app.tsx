import '../styles.css';
import withData from '../configureClient';
import { ApolloProvider } from '@apollo/client';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withData(MyApp);
