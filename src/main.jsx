import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Scratch from "./components/Scratch.jsx";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
import midRigh from "./components/midRigh.jsx";

const New = () => {
    return (
        <>
        <div className="flex w-[80%]">
            <Middle />
            <Scratch />
        </div>
        </>
    )
}

const Mid_right = () => {
  return (
    <>
      <div className="flex w-[80%]">
        {/* <Left /> */}
        <Middle />
        <Right />
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <div className="flex">
        <Left />
        <Outlet />
        {/* <Middle />
        <Right /> */}
      </div>
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Mid_right />,
      },
      {
        path: "/scratch",
        element: <Scratch />,
      },
      {
        path: "new_note",
        element: <New />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRoute} />
  </React.StrictMode>
);
