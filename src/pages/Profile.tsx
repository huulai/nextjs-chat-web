import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateUserInfoThunk } from "../store/slices/user/userThunk";

const avatarList = [
  "/avatar/gamer.png",
  "/avatar/cat.png",
  "/avatar/dog.png",
  "/avatar/empathy.png",
  "/avatar/girl.png",
  "/avatar/man-1.png",
  "/avatar/man.png",
  "/avatar/student.png",
  "/avatar/woman.png",
  "/avatar/woman-1.png",
  "/avatar/chicken.png",
  "/avatar/rabbit.png",
];

const ProfilePage = () => {
  const currentUser = useAppSelector((state) => state.user);
  const [openAvatarBox, setOpenAvatarBox] = useState(false);
  const dispatch = useAppDispatch();

  const handleChangeAvatar = (avatar: string) => {
    dispatch(updateUserInfoThunk({ userInfo: { avatar } }));
    setOpenAvatarBox(false);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={currentUser.avatar}
          alt="avatar"
          width={250}
          height={250}
          className="block mx-auto mt-5"
        />
        <div
          onClick={() => setOpenAvatarBox(false)}
          className={`fixed h-screen w-screen bg-secondary z-20 top-0 left-0 opacity-50 ${
            openAvatarBox ? "" : "hidden"
          }`}
        ></div>
        <div
          className={`absolute z-30 bottom-6 left-1/2 transform -translate-x-1/2 w-60 bg-white border border-primary rounded-2xl p-3 ${
            openAvatarBox ? "" : "hidden"
          }`}
        >
          <div className="grid grid-cols-4 gap-4">
            {avatarList.map((avt) => {
              return (
                <button key={avt} onClick={() => handleChangeAvatar(avt)}>
                  <img src={avt} alt="avatar" width={35} height={35} />
                </button>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => setOpenAvatarBox(true)}
          className="bg-primary p-2 rounded-full font-semibold text-white text-xs absolute z-10 -bottom-3 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          Change
        </button>
      </div>
      <div className="flex flex-row justify-between mt-5 border-b border-light-gray pb-2">
        <div>
          <p className="font-bold text-xl">{currentUser.username}</p>
          <p className="text-lg">
            Sex:{" "}
            {currentUser.sex === "Female" ? (
              <img
                src="/female.svg"
                width={16}
                height={16}
                className="inline-block"
              />
            ) : (
              <img
                src="/male.svg"
                width={16}
                height={16}
                className="inline-block"
              />
            )}
          </p>
        </div>
        <p>Age: {currentUser.age}</p>
      </div>
      <div className="mt-2 flex flex-row justify-between border-b border-light-gray pb-2">
        <p className="font-bold text-lg">Occupation</p>
        <p>{currentUser.occupation}</p>
      </div>
      <div className="mt-2 border-b border-light-gray pb-2">
        <p className="font-bold text-lg">About Me</p>
        <p>{currentUser.aboutMe}</p>
      </div>
      <div className="mt-2">
        <p className="font-bold text-lg">My Interest</p>
        <div>
          {currentUser.interests.map((interest) => (
            <span key={interest} className="p-1 rounded-lg bg-primary text-white font-semibold mr-2 text-xs">{interest}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
