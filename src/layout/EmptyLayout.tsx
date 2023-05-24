import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EmptyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-screen-xl mx-auto">
      {children}
      <ToastContainer autoClose={1500} />
    </main>
  );
};

export default EmptyLayout;
