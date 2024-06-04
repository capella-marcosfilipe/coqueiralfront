import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeSemLogin from "./pages/HomeSemLogin";
import Home from "./pages/Home";
import Test from "./Test";
import ErrorPage from "./routes/ErrorPage";
import Sobre from "./pages/Sobre";
import SobreSemLogin from "./pages/SobreSemLogin";
import Config from "./pages/Config";
import Entrar from "./pages/Entrar";
import Cadastros from "./pages/Cadastros";
import Teladivulgue from "./pages/Teladivulgue";
import TeladivulgueSemLogin from "./pages/TeladivulgueSemLogin";
import Telaetica from "./pages/Telaetica";
import TelaeticaSemLogin from "./pages/TelaeticaSemLogin";
import Ajuda from "./pages/Ajuda";
import Roupa1 from "./pages/Roupa1";
import Roupa2 from "./pages/Roupa2";
import Roupa3 from "./pages/Roupa3";
import Roupa4 from "./pages/Roupa4";
import AjudaSemLogin from "./pages/AjudaSemLogin";
import Admlogin from "./pages/Admlogin"; 
import ProductForm from "./pages/ProductForm";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <Sobre />,
  },
  
  {
    path: "/aboutsemlogin",
    element: <SobreSemLogin />,
  },
  {
    path: "/settings",
    element: <Config />,
  },
  {
    path: "/login",
    element: <Entrar />,
  },
  {
    path: "/Loginadm",
    element: <Admlogin />,
  },
  {
    path: "/products",
    element: <ProductForm />,
  },
  {
    path: "/Cadastro",
    element: <Cadastros />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/products",
    element: <ProductForm />,
  },
  {
    path: "/",
    element: <HomeSemLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/divulgue",
    element: <Teladivulgue />,
  },
  {
    path: "/DivulgueSemLogin",
    element: <TeladivulgueSemLogin />,
  },
  {
    path: "/etica",
    element: <Telaetica />,
  },
  {
    path: "/eticasemlogin",
    element: <TelaeticaSemLogin />,
  },
  {
    path: "/help",
    element: <Ajuda />,
  },
  {
    path: "/helpSemLogin",
    element: <AjudaSemLogin />,
  },
  {
    path: "/Clothes1",
    element: <Roupa1 />,
  },
  {
    path: "/Clothes2",
    element: <Roupa2 />,
  },
  {
    path: "/Clothes3",
    element: <Roupa3 />,
  },
  {
    path: "/Clothes4",
    element: <Roupa4 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
