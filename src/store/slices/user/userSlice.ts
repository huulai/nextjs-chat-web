import { createSlice } from "@reduxjs/toolkit";
import {
  getUserInfoThunk,
  logOutThunk,
  refreshTokenThunk,
  signInThunk,
  signUpThunk,
  updateUserInfoThunk,
} from "./userThunk";
import { router } from "../../../routes";
import { RootState } from "../..";
import { User } from "../../../graphql/generated/types";

export interface userState {
  userId: string;
  username: string;
  email: string;
  sex: string;
  occupation: string;
  interests: string[];
  age: number;
  aboutMe: string;
  avatar: string;
}

const initialState: userState = {
  userId: "",
  username: "",
  email: "",
  sex: "",
  occupation: "",
  interests: [],
  age: 0,
  aboutMe: "",
  avatar: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          const { refreshToken, accessToken } = payload.signup;
          updateToken(refreshToken, accessToken);
          updateUser(state, payload.signup.user as User);
        }
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          const { refreshToken, accessToken } = payload.signin;
          updateToken(refreshToken, accessToken);
          updateUser(state, payload.signin.user as User);
        }
      })
      .addCase(refreshTokenThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          const { refreshToken, accessToken } = payload.getNewTokens;
          updateToken(refreshToken, accessToken);
          updateUser(state, payload.getNewTokens.user as User);
          router.navigate("/home");
        }
      })
      .addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          updateUser(state, payload.user as User);
        }
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          updateUser(state, payload.updateUserInfo as User);
        }
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        localStorage.setItem("accessToken", "");
        localStorage.setItem("refreshToken", "");
        state.userId = "";
        state.email = "";
        state.username = "";
      });
  },
});

const updateUser = (state: userState, user: User) => {
  state.userId = user.id;
  state.email = user.email;
  state.username = user.username;
  state.aboutMe = user.aboutMe;
  state.age = user.age;
  state.occupation = user.occupation;
  state.sex = user.sex;
  state.avatar = user.avatar;
  state.interests = user.interests as string[];
};

const updateToken = (refreshToken: string, accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const selectPendingFriends = (state: RootState) =>
  state.friend.friends.filter((friend) => friend.status === "PENDING");

export default userSlice.reducer;
