import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Scratch from "./components/Scratch.jsx";
import Left from "./components/Left";
import NewNotes from "./components/NewNotes.jsx";
import Begin from "./components/Begin.jsx";
import appStore from "./utils/appStore.jsx";
import { Provider } from "react-redux";
import Trash from "./components/Trash.jsx";
import UserContext from "./utils/UserContext.jsx";

const AppLayout = () => {

  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      name : ""
    }
    setuserName(data.name)
  }, [])

  return (  // here we pass setuserName for updating the value of userName
    <Provider store={appStore}> 
      <UserContext.Provider value = {{loggedInUser : userName, setuserName}}>
        <>
          <div className="flex">
            <Left />
            <Outlet />
          </div>
        </>
        </UserContext.Provider>
    </Provider>
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
      {
        path: "/trash",
        element: <Trash />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
  </React.StrictMode>
);
