import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userSlice from "./slices/user/userSlice";
import friendSlice from "./slices/friend/friendSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    friend: friendSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
