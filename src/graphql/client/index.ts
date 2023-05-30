import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/types";

export const getGraphqlClient = (url: string) => {
  const accessToken = localStorage.getItem("accessToken");
  const client = new GraphQLClient(url, {
    credentials: "include",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  return getSdk(client);
};

export const GraphqlClientRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken") as string;
  const client = new GraphQLClient("http://localhost:3000/graphql", {
    credentials: "include",
    headers: {
      authorization: `Bearer ${refreshToken}`,
    },
  });

  return getSdk(client);
};

export const gql = getGraphqlClient("http://localhost:3000/graphql");
