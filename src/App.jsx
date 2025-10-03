import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/Home";
import Community from "./pages/Community";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <SignIn /> },
      { path: "/auth/login", element: <LogIn /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
