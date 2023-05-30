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
      const res = await gql.AddFriend({ email });
      toast.success("Sent a friend request");
      return res.data;
    } catch (error) {
      console.log({ error });
      handleToastError(error);
    }
  }
);

export const removeFriendThunk = createAsyncThunk(
  "friend/removeFriend",
  async (id: string) => {
    try {
      const res = await gql.RemoveFriend({ id: Number(id) });
      return res.data;
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
      const res = await gql.UpdateFriend(input);
      return res.data;
    } catch (error) {
      console.log({ error });
      handleToastError(error);
    }
  }
);
