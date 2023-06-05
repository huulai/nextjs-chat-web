import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateUserInfoThunk } from "../store/slices/user/userThunk";
import { Link, useNavigate } from "react-router-dom";

type interestOption = {
  value: string;
  label: string;
};
const options: interestOption[] = [
  { value: "Football", label: "Football" },
  { value: "Tennis", label: "Tennis" },
  { value: "Volleyball", label: "Volleyball" },
  { value: "Basketball", label: "Basketball" },
  { value: "Painting", label: "Painting" },
  { value: "Drawing", label: "Drawing" },
  { value: "Writing", label: "Writing" },
  { value: "Cooking", label: "Cooking" },
  { value: "Reading", label: "Reading" },
  { value: "Pop", label: "Pop" },
  { value: "Rock", label: "Rock" },
  { value: "Hip-hop", label: "Hip-hop" },
  { value: "Jazz", label: "Jazz" },
  { value: "Classical", label: "Classical" },
  { value: "Beaches", label: "Beaches" },
  { value: "Mountains", label: "Mountains" },
  { value: "Movies", label: "Movies" },
  { value: "Tv Shows", label: "Tv Shows" },
  { value: "Video Games", label: "Video Games" },
  { value: "Stand-up Comedy", label: "Stand-up Comedy" },
];

const ProfileEditPage = () => {
  const currentUser = useAppSelector((state) => state.user);

  const [name, setName] = useState(currentUser.username || "");
  const [sex, setSex] = useState(currentUser.sex || "");
  const [age, setAge] = useState(currentUser.age || 0);
  const [occupation, setOccupation] = useState(currentUser.occupation || "");
  const [aboutMe, setAboutMe] = useState(currentUser.aboutMe || "");
  const [interests, setInterests] = useState<interestOption[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const res = currentUser.interests.map((interest) => ({
      value: interest,
      label: interest,
    }));
    setInterests(res);
  }, [currentUser]);

  const handleChangeInterest = (e: interestOption[]) => {
    console.log(e);
    setInterests(e);
  };

  const handleSubmitProfile = async () => {
    const userInfo = {
      username: name,
      age,
      sex: !sex ? "Male" : sex,
      occupation,
      aboutMe,
      interests: interests.map((interest) => interest.value),
    };
    const result = await dispatch(updateUserInfoThunk({ userInfo }));
    if (result.payload) {
      navigate("/profile");
    }
  };

  return (
    <div className="w-full pb-20 block overflow-y-scroll">
      <div className="w-full flex justify-between items-center mb-5">
        <Link to="/profile" className="mr-2 bg-error p-2 rounded-xl">
          <img src="/close-white.svg" alt="name" width={16} height={16} />
        </Link>
        <h6 className="text-xl font-bold text-center">Editting Profile</h6>
        <button
          className="mr-2 bg-primary p-2 rounded-xl"
          onClick={() => handleSubmitProfile()}
        >
          <img src="/check-white.svg" alt="name" width={16} height={16} />
        </button>
      </div>
      <div className="w-full">
        <div className="font-bold flex flex-row">
          <img
            src="/user-square.svg"
            alt="name"
            width={24}
            height={24}
            className="mr-2"
          />
          Name
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-primary rounded-full mt-2 p-2"
          placeholder="Name"
          name="name"
        />
      </div>
      <div className="w-full mt-5">
        <div className="font-bold flex flex-row">
          <img
            src="/heart.svg"
            alt="sex"
            width={24}
            height={24}
            className="mr-2"
          />
          Sex
        </div>

        <select
          name="sex"
          id="sex"
          value={sex}
          className="w-full p-2 rounded-full border border-primary mt-2"
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="w-full mt-5">
        <div className="font-bold flex flex-row">
          <img
            src="/profile.svg"
            alt="age"
            width={24}
            height={24}
            className="mr-2"
          />
          Age
        </div>

        <input
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          type="number"
          className="w-full border border-primary rounded-full mt-2 p-2 pl-3"
          placeholder="Age"
          name="age"
        />
      </div>
      <div className="w-full mt-5">
        <div className="font-bold flex flex-row">
          <img
            src="/suitcase.svg"
            alt="job"
            width={24}
            height={24}
            className="mr-2"
          />
          Ocupation
        </div>
        <input
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          className="w-full border border-primary rounded-full mt-2 p-2"
          placeholder="Ocupation"
          name="ocupation"
        />
      </div>
      <div className="w-full mt-5">
        <div className="font-bold flex flex-row">
          <img
            src="/home.svg"
            alt="job"
            width={24}
            height={24}
            className="mr-2"
          />
          About Me
        </div>
        <textarea
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          className="w-full border border-primary rounded-full mt-2 p-2"
          placeholder="About Me"
          name="aboutMe"
        />
      </div>
      <div className="w-full mt-5">
        <div className="font-bold flex flex-row">
          <img
            src="/star.svg"
            alt="interest"
            width={24}
            height={24}
            className="mr-2"
          />
          Interests
        </div>
        <Select
          onChange={handleChangeInterest}
          value={interests}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select mt-5 border-primary border rounded-md"
          classNamePrefix="select"
        />
      </div>
    </div>
  );
};

export default ProfileEditPage;
