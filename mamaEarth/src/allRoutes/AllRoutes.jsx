import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { Face } from "../pages/Face";
import { Hair } from "../pages/Hair";
import { Makeup } from "../pages/Makeup";
import { Body } from "../pages/Body";
import { Combo } from "../pages/Combo";
import { NewLaunch } from "../pages/NewLaunch";
import { StoreLocator } from "../pages/StoreLocator";
import { Login } from "../pages/Login";
import { Signup } from "../pages/SignUp";
import { Dashboard } from "../dashboard/dashboard";
import { FaceNewL } from "../pages/FaceNewL";

export const AllRoutes = () => {
  const allRouts = [
    { to: "/", element: <Home /> },
    { to: "/face", element: <Face /> },
    { to: "/face-new-launch", element: <FaceNewL/>},
    { to: "/hair", element: <Hair /> },
    { to: "/makeup", element: <Makeup /> },
    { to: "/body", element: <Body /> },
    { to: "/combo", element: <Combo /> },
    { to: "/newlaunch", element: <NewLaunch /> },
    { to: "/login", element: <Login /> },
    { to: "/dash", element: <Dashboard /> },
    { to: "/sign", element: <Signup /> },
    {
      to: "/storelocator",
      element: <StoreLocator />,
    },
  ];
  return (
    <div>
      <Routes>
        {allRouts.map((link, index) => (
          <Route key={index} path={link.to} element={link.element} />
        ))}
      </Routes>
    </div>
  );
};
