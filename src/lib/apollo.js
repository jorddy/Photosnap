import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PrismicLink } from "apollo-link-prismic";

export const client = new ApolloClient({
  link: PrismicLink({
    uri: process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT,
    accessToken: process.env.NEXT_PUBLIC_PRISMIC_AUTH,
  }),
  cache: new InMemoryCache(),
});
