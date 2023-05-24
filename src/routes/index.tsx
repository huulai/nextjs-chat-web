import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import EmptyLayout from "../layout/EmptyLayout";
import AppLayout from "../layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/signin",
    element: (
      <EmptyLayout>
        <SignInPage />
      </EmptyLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <EmptyLayout>
        <SignUpPage />
      </EmptyLayout>
    ),
  },
  {
    path: "/home",
    element: (
      <AppLayout>
        <HomePage />
      </AppLayout>
    ),
  },
  {
    path: "/",
    element: (
      <EmptyLayout>
        <LandingPage />
      </EmptyLayout>
    ),
  },
]);
