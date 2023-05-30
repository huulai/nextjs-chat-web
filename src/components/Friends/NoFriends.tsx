import { useAppDispatch } from "../../store/hooks";
import { openModalAddFriend } from "../../store/slices/friend/friendSlice";

const NoFriend = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center flex-grow">
      <div className="text-center">
        <h5 className="font-bold text-xl">No Friends</h5>
        <p className="text-xs">
          Add some friends and start chatting with them.
        </p>
        <p className="text-xs">Your friends will show up here</p>
        <button
          className="btn-primary mt-5"
          onClick={() => dispatch(openModalAddFriend())}
        >
          Add Friends
        </button>
      </div>
    </div>
  );
};

export default NoFriend;
