import { createSlice } from "@reduxjs/toolkit";
import { Friend } from "../../../graphql/generated/types";
import {
  addFriendThunk,
  getFriendsThunk,
  removeFriendThunk,
  updateFriendThunk,
} from "./friendThunk";

export interface friendState {
  friends: Friend[];
  isOpenModalAddFriend: boolean;
}

const initialState: friendState = {
  friends: [],
  isOpenModalAddFriend: false,
};

export const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    openModalAddFriend: (state) => {
      state.isOpenModalAddFriend = true;
    },
    closeModalAddFriend: (state) => {
      state.isOpenModalAddFriend = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFriendsThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.friends = payload?.friends as Friend[];
        }
      })
      .addCase(addFriendThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.friends.push(payload.addFriend as Friend);
        }
      })
      .addCase(removeFriendThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          const idx = state.friends.findIndex(
            (friend) => friend.id === payload.removeFriend.id
          );
          state.friends.splice(idx, 1);
        }
      })
      .addCase(updateFriendThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          const idx = state.friends.findIndex(
            (friend) => friend.id === payload.updateFriend.id
          );
          const updatedFriend = payload.updateFriend as Friend;
          state.friends.splice(idx, 1, updatedFriend);
        }
      });
  },
});

export const { openModalAddFriend, closeModalAddFriend } = friendSlice.actions;

export default friendSlice.reducer;
