import { useAppSelector } from "../../store/hooks";
import Avatar from "../commons/Avatar";

const BlockedContainer = () => {
  const friends = useAppSelector((state) =>
    state.friend.friends.filter((friend) => friend.status === "BLOCKED")
  );
  const currentUserId = useAppSelector((state) => state.user.userId);

  return (
    <div>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <Avatar imgUrl="/avatar/gamer.png" name="avatar" />
            {currentUserId === friend.receiver.id
              ? friend.sender.username
              : friend.receiver.username}
          </div>
        );
      })}
    </div>
  );
};

export default BlockedContainer;
