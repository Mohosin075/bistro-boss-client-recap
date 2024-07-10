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
import DashBoard from "../layOut/DashBoard";
import Cart from "../pages/dashboard/cards/Cart";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddItems from "../pages/dashboard/addItems/AddItems";
import AdminRoutes from "./AdminRoutes";

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
    {
      path : 'dashboard',
      element : <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children : [
        {
          path : 'cart',
          element : <Cart></Cart>
        },
        // admin only routes
        {
          path : 'users',
          element : <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path : 'addItems',
          element : <AdminRoutes><AddItems></AddItems></AdminRoutes>
        }
      ]

    }
  ]);