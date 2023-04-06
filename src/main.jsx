import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Layout/Home";
import Shop from "./Components/shop/Shop";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import cartProductLoader from "./Loaders/CarProductsLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },

      {
        path: "review",
        element: <OrderSummary></OrderSummary>,
        loader: cartProductLoader,
      },
      {
        path: "manage inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
