import { DataFriendAction } from "./../../../graphql/subscriptions/FriendAction";
import { createSlice } from "@reduxjs/toolkit";
import { Friend } from "../../../graphql/generated/types";
import { getFriendsThunk } from "./friendThunk";

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
    receiveFriendRequest: (
      state,
      { payload }: { payload: DataFriendAction }
    ) => {
      state.friends.push(payload.friendAction.friend);
    },
    updateFriend: (state, { payload }: { payload: DataFriendAction }) => {
      if (payload) {
        const idx = state.friends.findIndex(
          (friend) => friend.id === payload.friendAction.friend.id
        );
        const updatedFriend = payload.friendAction.friend as Friend;
        state.friends.splice(idx, 1, updatedFriend);
      }
    },
    deleteFriend: (state, { payload }: { payload: DataFriendAction }) => {
      if (payload) {
        const idx = state.friends.findIndex(
          (friend) => friend.id === payload.friendAction.friend.id
        );
        state.friends.splice(idx, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFriendsThunk.fulfilled, (state, { payload }) => {
      if (payload) {
        state.friends = payload?.friends as Friend[];
      }
    });
  },
});

export const {
  openModalAddFriend,
  closeModalAddFriend,
  receiveFriendRequest,
  updateFriend,
  deleteFriend,
} = friendSlice.actions;

export default friendSlice.reducer;
