import { wsClient } from "../client/wsClient";
import { Friend } from "../generated/types";

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

export type DataFriendAction = {
  friendAction: {
    action: string;
    friend: Friend;
  };
};

export const friendActionSubscription = (
  onNext: ({ data }: { data: DataFriendAction }) => void
) =>
  wsClient.request({ query }).subscribe({
    next: onNext,
  });
