import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteFriendThunk,
  updateFriendThunk,
} from "../../store/slices/friend/friendThunk";
import Avatar from "../commons/Avatar";
import NoRequests from "./NoRequests";

const RequestsContainter = () => {
  const friends = useAppSelector((state) =>
    state.friend.friends.filter((friend) => friend.status === "PENDING")
  );
  const currentUserId = useAppSelector((state) => state.user.userId);
  const dispatch = useAppDispatch();

  if (!friends.length) return <NoRequests />;
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
              {currentUserId === friend.receiver.id && (
                <button
                  onClick={() =>
                    dispatch(
                      updateFriendThunk({
                        id: Number(friend.id),
                        status: "ACCEPTED",
                      })
                    )
                  }
                  className="cursor-pointer rounded-2xl border border-primary p-1 text-xs"
                >
                  Accept
                </button>
              )}

              <button
                onClick={() => dispatch(deleteFriendThunk(friend.id))}
                className="cursor-pointer rounded-2xl border border-warning p-1 text-xs ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RequestsContainter;
