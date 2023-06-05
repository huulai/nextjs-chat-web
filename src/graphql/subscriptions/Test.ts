import { wsClient } from "../client/wsClient";

const query = `
  subscription FriendAction {
    friendAction {
      action
      friend {
        id
        sender {
          username
          email
          id
        }
        receiver {
          username
          email
          id
        }
        status
      }
    }
  }
`;

export const FriendActionSubscription = () =>
  wsClient.request({ query }).subscribe({
    next({ data }: { data: any }) {
      if (data) {
        console.log("We got something!", data);
      }
    },
  });
