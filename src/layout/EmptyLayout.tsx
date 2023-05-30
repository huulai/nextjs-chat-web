import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../store/hooks";
import { refreshTokenThunk } from "../store/slices/user/userThunk";

const EmptyLayout = ({ children }: { children: React.ReactNode }) => {
  const dataFetchedRef = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (!accessToken && refreshToken) dispatch(refreshTokenThunk());
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto">
      {children}
      <ToastContainer autoClose={1500} />
    </main>
  );
};

export default EmptyLayout;
