import { useAppSelector } from "../../store/hooks";
import Avatar from "../commons/Avatar";

const HomeListFriend = () => {
  const currentUserId = useAppSelector((state) => state.user.userId);
  const friends = useAppSelector((state) => state.friend.friends);

  return (
    <div className="whitespace-nowrap overflow-scroll">
      {friends.map((friend) => {
        const obj =
          currentUserId === friend.receiver.id
            ? friend.sender
            : friend.receiver;
        return (
          <div className="inline-block mr-4" key={friend.id}>
            <Avatar imgUrl={obj.avatar} name={obj.username} />
          </div>
        );
      })}
    </div>
  );
};

export default HomeListFriend;
