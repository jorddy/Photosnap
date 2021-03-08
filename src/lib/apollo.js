import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.PRISMIC_ENDPOINT,
  cache: new InMemoryCache(),
});
