import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Secret from "../pages/secret/Secret";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children :[
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/menu',
            element : <Menu></Menu>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/signup',
            element : <SignUp></SignUp>
        },
        {
            path : '/secret',
            element : <PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
            path : '/order/:category',
            element : <Order></Order>
        },
      ]
    },
  ]);