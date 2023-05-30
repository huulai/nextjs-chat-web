import { useAppSelector } from "../../store/hooks";
import NoFriends from "./NoFriends";

const FriendsContainer = () => {
  const friends = useAppSelector((state) =>
    state.friend.friends.filter((friend) => friend.status === "ACCEPTED")
  );
  const currentUserId = useAppSelector((state) => state.user.userId);

  if (!friends.length) return <NoFriends />;
  return (
    <div>
      {friends.map((friend) => {
        return (
          <p key={friend.id}>
            {currentUserId === friend.receiver.id
              ? friend.sender.username
              : friend.receiver.username}
          </p>
        );
      })}
    </div>
  );
};

export default FriendsContainer;
