import {
  SignInMutationVariables,
  SignUpMutationVariables,
} from "./../../../graphql/generated/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "../../../graphql/client";
import { toast } from "react-toastify";
import { handleToastError } from "../../../utils/handleToastError";

export const fetchUserThunk = createAsyncThunk("user/fetch", async () => {
  const { data } = await gql.Hello();
  return data;
});

export const signUpThunk = createAsyncThunk(
  "user/signUp",
  async (params: SignUpMutationVariables) => {
    try {
      const res = await gql.SignUp(params);
      toast.success("success");
      return res.data;
    } catch (error: any) {
      console.log({ error });
      handleToastError(error);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "user/signIn",
  async (params: SignInMutationVariables, thunkApi) => {
    try {
      const res = await gql.SignIn(params);
      toast.success("success");
      return res.data;
    } catch (error: any) {
      console.log({ error });
      handleToastError(error);
      return false;
    }
  }
);
