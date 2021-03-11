import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import "@fontsource/dm-sans";
import "../sass/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
