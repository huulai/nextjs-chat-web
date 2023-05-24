import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/types";

export const getGraphqlClient = (url: string) => {
  const client = new GraphQLClient(url, {
    credentials: "include",
    headers: { authorization: "bearer" },
  });

  return getSdk(client);
};

export const gql = getGraphqlClient("http://localhost:3000/graphql");
