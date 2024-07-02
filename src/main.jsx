import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Scratch from "./components/Scratch.jsx";
import Left from "./components/Left";
import NewNotes from "./components/NewNotes.jsx";
import Begin from "./components/Begin.jsx";
import appStore from "./utils/appStore.jsx";
import { Provider } from "react-redux";
import Trashitem from "./components/Trashitem.jsx";


const AppLayout = () => {
  return (
    <Provider store = {appStore}>
         <> 
      <div className="flex">
        <Left />
        <Outlet />
      </div>
     </> 
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
        element: <Trashitem />
      }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
  </React.StrictMode>
);
