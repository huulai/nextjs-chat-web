import { toast } from "react-toastify";

export const handleToastError = (error: any) => {
  const { message } = error.response.errors[0].extensions.originalError;
  if (typeof message === "object") {
    message.forEach((messageEl: string) => {
      toast.error(messageEl);
    });
  } else {
    toast.error(message);
    console.log({ message });
  }
};
