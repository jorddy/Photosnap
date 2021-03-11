import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PrismicLink } from "apollo-link-prismic";

export const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://photosnap.prismic.io/graphql",
    accessToken:
      "MC5ZRWE5VmhBQUFDQUFKRXVB.77-977-9PyXvv70s77-9AF_vv71lEH3vv71E77-977-9GU7vv70977-977-9cu-_vWPvv73vv73vv71NZVk",
  }),
  cache: new InMemoryCache(),
});
