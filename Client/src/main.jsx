import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app.jsx";
import Home from "./pages/home.jsx";
import Calender from "./pages/calender.jsx";
import CompletedTasks from "./pages/completedTasks.jsx";
import LoginPage from "./pages/login.jsx";
import TaskCreator from "./pages/taskCreator.jsx";
import NotFound from "./pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/caleder",
        element: <Calender />,
      },
      {
        path: "/completed",
        element: <CompletedTasks />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/taskCreator",
        element: <TaskCreator />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
