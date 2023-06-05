import { toast } from "react-toastify";
import { GraphqlClientRefreshToken } from "../graphql/client";
import { router } from "../routes";

const refreshToken = async () => {
  try {
    const res = await GraphqlClientRefreshToken().refreshTokens();
    toast.success("Welcome back");
    localStorage.setItem("accessToken", res.data.getNewTokens.accessToken);
    localStorage.setItem("refreshToken", res.data.getNewTokens.refreshToken);
    return res.data;
  } catch (error: any) {
    console.log({ error });
    router.navigate("/");
    return false;
  }
};

export const handleToastError = (error: any) => {
  const { message } = error.response.errors[0].extensions.originalError;
  if (typeof message === "object") {
    message.forEach((messageEl: string) => {
      toast.error(messageEl);
    });
  } else {
    toast.error(message);
    console.log({ message });
    if (message === "Unauthorized") refreshToken();
  }
};
