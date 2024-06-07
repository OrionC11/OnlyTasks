import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app.jsx";
import Home from "./pages/home.jsx";
import Calender from "./pages/calender.jsx";
import TaskCreator from "./pages/taskCreator.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
// import CompletedTasks from "./pages/completedTasks.jsx";
// import NotFound from "./pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/taskCreator",
        element: <TaskCreator />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/completed",
      //   element: <CompletedTasks />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
