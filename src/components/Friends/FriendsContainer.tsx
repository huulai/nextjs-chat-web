import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteFriendThunk,
} from "../../store/slices/friend/friendThunk";
import Avatar from "../commons/Avatar";
import NoFriends from "./NoFriends";

const FriendsContainer = () => {
  const friends = useAppSelector((state) =>
    state.friend.friends.filter((friend) => friend.status === "ACCEPTED")
  );
  const currentUserId = useAppSelector((state) => state.user.userId);
  const dispatch = useAppDispatch();

  if (!friends.length) return <NoFriends />;
  return (
    <div className="mt-5 w-full">
      {friends.map((friend) => {
        const obj =
          currentUserId === friend.receiver.id
            ? friend.sender
            : friend.receiver;

        return (
          <div
            key={friend.id}
            className="flex flex-row items-center w-full justify-between"
          >
            <div className="flex items-center">
              <Avatar imgUrl="/avatar/gamer.png" name="" />
              <span className="ml-2 font-semibold">{obj.username}</span>
            </div>
            <div>
              <button
                onClick={() => dispatch(deleteFriendThunk(friend.id))}
                className="cursor-pointer rounded-2xl border border-warning p-1 text-xs ml-2"
              >
                Unfriend
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsContainer;
