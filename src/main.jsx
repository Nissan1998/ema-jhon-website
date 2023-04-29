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
import Checkout from "./Components/CheckOut/Checkout";
import Signup from "./Components/SignUp/Signup";
import SignUp from "./Components/SignUp/Signup";
import AuthProvider from "./Providers/AuthProvider";
import PrivetRoute from "./Routes/PrivetRoute";
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
        path: "inventory",
        element: (
          <PrivetRoute>
            <Inventory></Inventory>
          </PrivetRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivetRoute>
            <Checkout></Checkout>
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
