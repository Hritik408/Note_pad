import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Scratch from "./components/Scratch.jsx";
import Left from "./components/Left";
import Search from "./components/Search.jsx";
import Right from "./components/Right.jsx";
import Text from "./components/Text.jsx";
import NewNotes from "./NewNotes.jsx";

const Begin = () => {
  return (
    <>
      <div className="flex w-[80%]">
        {/* <Left /> */}
        <Search />
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
        element: <Begin />,
      },
      {
        path: "/scratch",
        element: <Scratch />,
      },
      {
        path: "/new_note",
        element: <NewNotes />,
      },
      // {
      //   path: "/notes",
      //   element: <Notes />
      // }
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
