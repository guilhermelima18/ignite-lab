import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4orwyj20ws601xsgz14extb/master",
  cache: new InMemoryCache(),
});
