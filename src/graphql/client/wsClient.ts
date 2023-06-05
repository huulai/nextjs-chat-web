import { SubscriptionClient } from "graphql-subscriptions-client";
const GRAPHQL_ENDPOINT = "ws://localhost:3000/graphql";

export const wsClient = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
  lazy: true, // only connect when there is a query
  connectionCallback: (error) => {
    error && console.error(error);
  },
  connectionParams: {
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
