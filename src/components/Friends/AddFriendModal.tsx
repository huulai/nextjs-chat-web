import { useState } from "react";
import Input from "../commons/Input";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeModalAddFriend } from "../../store/slices/friend/friendSlice";
import { addFriendThunk } from "../../store/slices/friend/friendThunk";

const AddFriendModal = () => {
  const [email, setEmail] = useState("");
  const isOpenModalAddFriend = useAppSelector(
    (state) => state.friend.isOpenModalAddFriend
  );

  const dispatch = useAppDispatch();

  const handleAddFriend = () => {
    dispatch(addFriendThunk(email));
  };

  return (
    <>
      <div
        className={`opacity-50 absolute z-20 bg-secondary h-screen w-screen top-0 left-0 ${
          isOpenModalAddFriend ? "" : "hidden"
        }`}
        onClick={() => dispatch(closeModalAddFriend())}
      ></div>
      <div
        className={`z-30 w-80 bg-white right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-5 ${
          isOpenModalAddFriend ? "" : "hidden"
        }`}
      >
        <button
          className="right-4 absolute cursor-pointer top-3"
          onClick={() => dispatch(closeModalAddFriend())}
        >
          <img src="/close.svg" alt="search" width={18} height={18} />
        </button>

        <h6 className="font-bold text-xl text-center">Add Friend</h6>
        <Input
          value={email}
          handleOnChange={setEmail}
          placeholder="email"
          name="email"
        >
          <img src="/email.svg" alt="email" width={24} height={24} />
        </Input>

        <button className="btn-primary my-5" onClick={() => handleAddFriend()}>
          Add Friend
        </button>
      </div>
    </>
  );
};

export default AddFriendModal;
