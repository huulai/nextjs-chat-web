import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/commons/Input";
import AppDrawer from "./AppDrawer";
import AddFriendModal from "../../components/Friends/AddFriendModal";
import { useAppDispatch } from "../../store/hooks";
import { getUserInfoThunk } from "../../store/slices/user/userThunk";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dataFetchedRef = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    setTimeout(() => {
      dispatch(getUserInfoThunk());
    }, 50);
  }, []);

  return (
    <div className="bg-primary w-screen h-screen static overflow-hidden">
      <main className="max-w-screen-xl mx-auto flex flex-col h-screen ">
        <div className="pt-10 flex justify-between">
          <AppDrawer />
          <img src="/logo-white.svg" alt="Logo" width={30} height={30} />
          <div style={{ width: 40, height: 40 }} className="mr-2"></div>
        </div>
        <div className="px-5">
          <Input
            value={searchTerm}
            handleOnChange={setSearchTerm}
            placeholder="Search"
            name="search"
          >
            <img src="/search.svg" alt="search" width={24} height={24} />
          </Input>
        </div>
        <div className="bg-white mt-2 flex flex-grow rounded-tl-[2.7em] rounded-tr-[2.7em] px-5 pt-5">
          {children}
        </div>
        <ToastContainer autoClose={1500} />
      </main>
      <AddFriendModal />
    </div>
  );
};

export default AppLayout;
