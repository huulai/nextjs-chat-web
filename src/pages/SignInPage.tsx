import { useState } from "react";
import Input from "../components/input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { signInThunk } from "../store/slices/user/userThunk";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const handleSignIn = async () => {
    const result = await dispatch(signInThunk({ input: { password, email } }));

    console.log({ result });
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
      <div className="flex flex-col grow items-center justify-center max-w-lg mx-auto">
        <div className="flex flex-row justify-center items-center mb-20">
          <h1 className="inline-block text-2xl text-center font-semibold mr-2 pb-1">
            Sign in to
          </h1>
          <img src="/logo-text.svg" alt="email" width={112} height={33} />
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
        <button className="btn-primary mt-10" onClick={() => handleSignIn()}>
          Sign in
        </button>
        <p className="text-center text-sub mt-4">
          Don&#39;t have an account yet?{" "}
          <Link to="/signup" className="underline text-virgo-green">
            Sign up
          </Link>
        </p>
        <p className="text-sub text-center mt-40">
          By signing in, you agree to our Terms and Conditions, Learn how we use
          your data in our Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default SignInPage;
