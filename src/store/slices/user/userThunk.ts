import {
  SignInMutationVariables,
  SignUpMutationVariables,
} from "./../../../graphql/generated/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GraphqlClientRefreshToken, gql } from "../../../graphql/client";
import { toast } from "react-toastify";
import { handleToastError } from "../../../utils/handleToastError";

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
  async (params: SignInMutationVariables) => {
    try {
      const res = await gql.SignIn(params);
      return res.data;
    } catch (error: any) {
      console.log({ error });
      handleToastError(error);
      return false;
    }
  }
);

export const refreshTokenThunk = createAsyncThunk(
  "user/refreshToken",
  async () => {
    try {
      const res = await GraphqlClientRefreshToken().refreshTokens();
      toast.success("Welcome back");
      return res.data;
    } catch (error: any) {
      console.log({ error });
      handleToastError(error);
      return false;
    }
  }
);

export const getUserInfoThunk = createAsyncThunk(
  "user/getUserInfo",
  async () => {
    try {
      const res = await gql.User();
      toast.success("Welcome back");
      return res.data;
    } catch (error: any) {
      console.log({ error });
      handleToastError(error);
      return false;
    }
  }
);
