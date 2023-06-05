import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logOutThunk } from "../../store/slices/user/userThunk";

const AppDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const userId = useAppSelector((state) => state.user.userId);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    const result = await dispatch(logOutThunk({ input: Number(userId) }));

    if (result.payload) {
      navigate("/");
    }
  };
  return (
    <div>
      <button
        className="ml-2 cursor-pointer"
        onClick={() => setOpenDrawer(true)}
      >
        <img src="/drawer.svg" alt="drawer" width={40} height={40} />
      </button>
      <div
        className={`absolute w-screen top-0 left-0 h-screen opacity-30 bg-secondary z-10 ease-in-out duration-300 ${
          openDrawer ? "translate-x-0 " : "-translate-x-full"
        }`}
        onClick={() => setOpenDrawer(false)}
      ></div>
      <div
        className={`absolute w-2/3 h-screen bg-white rounded-tr-4xl rounded-br-4xl z-20 top-0 left-0 ease-in-out duration-300 ${
          openDrawer ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div style={{ height: 32 }} className="mt-16 w-full">
          <button className="float-right" onClick={() => setOpenDrawer(false)}>
            <img
              src="/chevron-left.svg"
              alt="chevron-left"
              width={32}
              height={32}
            />
          </button>
        </div>
        <div className="flex flex-row items-center mt-4 pl-5 py-2 bg-[#ECF0F0]">
          <div
            style={{ width: 35, height: 35, backgroundColor: "#c0c0c0" }}
            className="rounded-full inline-block mr-2"
          ></div>
          <span className="font-semibold">Sam</span>
        </div>
        <div className="pl-5">
          <Link
            to="/home"
            className="flex flex-row items-center mt-4 cursor-pointer"
            onClick={() => setOpenDrawer(false)}
          >
            <img
              src="/home.svg"
              alt="home"
              width={20}
              height={20}
              className="inline-block"
            />
            <span className="ml-2">Conversations</span>
          </Link>
          <Link
            to="/friends"
            className="flex flex-row items-center mt-4 cursor-pointer"
            onClick={() => setOpenDrawer(false)}
          >
            <img
              src="/friends.svg"
              alt="friends"
              width={20}
              height={20}
              className="inline-block"
            />
            <span className="ml-2">Friends</span>
          </Link>
          <Link
            to="/profile"
            className="flex flex-row items-center mt-4 cursor-pointer"
            onClick={() => setOpenDrawer(false)}
          >
            <img
              src="/profile.svg"
              alt="profile"
              width={20}
              height={20}
              className="inline-block"
            />
            <span className="ml-2">Profile</span>
          </Link>
          <button
            className="flex flex-row items-center mt-4 cursor-pointer"
            onClick={() => handleLogOut()}
          >
            <img
              src="/log-out.svg"
              alt="log out"
              width={20}
              height={20}
              className="inline-block"
            />
            <span className="ml-2">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDrawer;
