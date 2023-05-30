import { createSlice } from "@reduxjs/toolkit";
import {
  getUserInfoThunk,
  refreshTokenThunk,
  signInThunk,
  signUpThunk,
} from "./userThunk";
import { router } from "../../../routes";
import { RootState } from "../..";

export interface userState {
  userId: string;
  username: string;
  email: string;
}

const initialState: userState = {
  userId: "",
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          localStorage.setItem(
            "accessToken",
            payload.signup.accessToken as string
          );
          localStorage.setItem(
            "refreshToken",
            payload.signup.refreshToken as string
          );
          state.email = payload.signup.user.email;
          state.userId = payload.signup.user.id;
          state.username = payload.signup.user.username;
        }
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          localStorage.setItem(
            "accessToken",
            payload.signin.accessToken as string
          );
          localStorage.setItem(
            "refreshToken",
            payload.signin.refreshToken as string
          );
          state.userId = payload.signin.user.id;
          state.email = payload.signin.user.email;
          state.username = payload.signin.user.username;
        }
      })
      .addCase(refreshTokenThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          localStorage.setItem(
            "accessToken",
            payload.getNewTokens.accessToken as string
          );
          localStorage.setItem(
            "refreshToken",
            payload.getNewTokens.refreshToken as string
          );
          state.email = payload.getNewTokens.user.email;
          state.userId = payload.getNewTokens.user.id;
          state.username = payload.getNewTokens.user.username;
          router.navigate("/home");
        }
      })
      .addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.userId = payload.user.id;
          state.email = payload.user.email;
          state.username = payload.user.username;
        }
      });
  },
});

export const selectPendingFriends = (state: RootState) =>
  state.friend.friends.filter((friend) => friend.status === "PENDING");

export default userSlice.reducer;
