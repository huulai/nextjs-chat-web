import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") as string;
  }, []);
  return (
    <main className="max-w-screen-xl mx-auto">
      {children}
      <ToastContainer autoClose={1500} />
    </main>
  );
};

export default AppLayout;
