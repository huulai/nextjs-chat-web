const LandingPage = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center p-5 max-w-lg mx-auto">
      <img src="/Logo.svg" alt="ChatApp Logo" width={225} height={66} />
      <p className="mt-2">Chat and connect with people</p>
      <a href="/signin" className="btn mt-40">
        Sign in
      </a>
      <a href="/signup" className="btn-primary mt-5">
        Sign up
      </a>
      <p className="text-sub text-center mt-5">
        By Signing in, you agree to our Terms and Conditions, Learn how we use
        your data in our Privacy Policy.
      </p>
    </section>
  );
};

export default LandingPage;
