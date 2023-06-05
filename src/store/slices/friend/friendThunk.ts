import { createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "../../../graphql/client";
import { handleToastError } from "../../../utils/handleToastError";
import { toast } from "react-toastify";
import { UpdateFriendMutationVariables } from "../../../graphql/generated/types";

export const getFriendsThunk = createAsyncThunk(
  "friend/getFriends",
  async () => {
    try {
      const res = await gql.Friends();
      return res.data;
    } catch (error) {
      console.log({ error });
      handleToastError(error);
    }
  }
);

export const addFriendThunk = createAsyncThunk(
  "friend/addFriend",
  async (email: string) => {
    try {
      await gql.AddFriend({ email });
      toast.success("Sent a friend request");
    } catch (error) {
      console.log({ error });
      handleToastError(error);
    }
  }
);

export const deleteFriendThunk = createAsyncThunk(
  "friend/deleteFriend",
  async (id: string) => {
    try {
      await gql.DeleteFriend({ id: Number(id) });
    } catch (error) {
      console.log({ error });
      handleToastError(error);
    }
  }
);

export const updateFriendThunk = createAsyncThunk(
  "friend/updateFriend",
  async (input: UpdateFriendMutationVariables) => {
    try {
      await gql.UpdateFriend(input);
    } catch (error) {
      console.log({ error });
      handleToastError(error);
    }
  }
);
