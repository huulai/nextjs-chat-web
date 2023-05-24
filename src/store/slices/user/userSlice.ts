import { createSlice } from "@reduxjs/toolkit";
import { fetchUserThunk, signUpThunk } from "./userThunk";

export interface userState {
  username: string;
  email: string;
}

const initialState: userState = {
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // addMessage: (state, action: PayloadAction<MessageEventPayload>) => {
    //   console.log(state);
    //   console.log(action);
    //   const { conversation, message } = action.payload;
    //   const conversationMessage = state.messages.find(
    //     (cm) => cm.id === conversation.id
    //   );
    //   conversationMessage?.messages.unshift(message);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        const data = action.payload;
        console.log(data);
      })
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
          state.username = payload.signup.user.username;
        }
      });
  },
});

// export const { addMessage, deleteMessage, editMessage } = userSlice.actions;

export default userSlice.reducer;
