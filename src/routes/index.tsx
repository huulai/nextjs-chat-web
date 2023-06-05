import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import EmptyLayout from "../layout/EmptyLayout";
import AppLayout from "../layout/AppLayout/AppLayout";
import DiscoveryPage from "../pages/DiscoveryPage";
import FriendsPage from "../pages/FriendsPage";
import ProfilePage from "../pages/Profile";
import ProfileEditPage from "../pages/ProfileEditPage";

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
    path: "/profile/edit",
    element: (
      <AppLayout>
        <ProfileEditPage />
      </AppLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <AppLayout>
        <ProfilePage />
      </AppLayout>
    ),
  },
  {
    path: "/discovery",
    element: (
      <AppLayout>
        <DiscoveryPage />
      </AppLayout>
    ),
  },
  {
    path: "/friends",
    element: (
      <AppLayout>
        <FriendsPage />
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
