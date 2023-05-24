import { useEffect, useRef, useState } from "react";
import Input from "../components/input";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserThunk, signUpThunk } from "../store/slices/user/userThunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dataFetchedRef = useRef(false);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    dispatch(fetchUserThunk());
  }, []);

  const handleSignUp = async () => {
    const result = await dispatch(
      signUpThunk({ input: { password, email, username } })
    );

    if (result.payload) {
      navigate("/home");
    }
  };

  return (
    <section className="p-5 flex flex-col min-h-screen">
      <img
        src="/Logo.svg"
        alt="ChatApp Logo"
        width={112}
        height={33}
        className="mb-10"
      />
      <div className="flex flex-col grow items-center justify-center  max-w-lg mx-auto">
        <div className="flex flex-row justify-center items-center mb-20">
          <h1 className="inline-block text-2xl text-center font-semibold mr-2 pb-1">
            Sign up with email
          </h1>
        </div>
        <Input
          value={email}
          handleOnChange={setEmail}
          placeholder="Email"
          name="email"
        >
          <img src="/email.svg" alt="email" width={24} height={24} />
        </Input>
        <Input
          value={password}
          handleOnChange={setPassword}
          placeholder="Password"
          type="password"
          name="email"
        >
          <img src="/lock.svg" alt="password" width={23} height={23} />
        </Input>
        <Input
          value={username}
          handleOnChange={setUsername}
          placeholder="Username"
          name="username"
        >
          <img src="/user-square.svg" alt="password" width={24} height={24} />
        </Input>
        <button className="btn-primary mt-10" onClick={() => handleSignUp()}>
          Sign up
        </button>
        <p className="text-center text-sub mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="underline text-virgo-green">
            Sign in
          </Link>
        </p>
        <p className="text-sub text-center mt-24">
          By signing up, you agree to our Terms and Conditions, Learn how we use
          your data in our Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;
