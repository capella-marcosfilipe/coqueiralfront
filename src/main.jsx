import React from "react";
import ReactDOM from "react-dom/client";

//1 - Cofigurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./Test";
import ErrorPage from "./routes/ErrorPage";
import Sobre from "./pages/Sobre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <Sobre />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
