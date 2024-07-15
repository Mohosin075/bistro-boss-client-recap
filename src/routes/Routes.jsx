import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layOut/DashBoard";
import Cart from "../pages/dashboard/cards/Cart";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddItems from "../pages/dashboard/addItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../pages/dashboard/manageItem/ManageItem";
import UpdateItems from "../pages/dashboard/updateItems/UpdateItems";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import UserHome from "../pages/dashboard/userHome/UserHome";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";
import SSLPayment from "../pages/dashboard/SSLPayment/SSLPayment";
import SuccessFull from "../pages/dashboard/SSLPayment/SuccessFull";
import Fail from "../pages/dashboard/SSLPayment/Fail";

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
            path : '/order/:category',
            element : <Order></Order>
        },
        {
          path : '/payment/success/:tranId',
          element : <SuccessFull></SuccessFull>
        },
        {
          path : '/payment/fail/:tranId',
          element : <Fail></Fail>
        },
      ]
    },
    {
      path : 'dashboard',
      element : <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children : [
        {
          path : 'userHome',
          element : <UserHome></UserHome>
        },
        {
          path : 'cart',
          element : <Cart></Cart>
        },
        {
          path : 'payment',
          element : <Payment></Payment>
        },
        {
          path : 'paymentHistory',
          element : <PaymentHistory></PaymentHistory>
        },
        {
          path : 'sslPayment',
          element : <SSLPayment></SSLPayment>
        },
        
        // admin only routes
        {
          path : 'adminHome',
          element : <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path : 'users',
          element : <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path : 'addItems',
          element : <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path : 'manageItems',
          element : <AdminRoutes><ManageItem></ManageItem></AdminRoutes>
        },
        {
          path : 'updateItem/:id',
          element : <AdminRoutes><UpdateItems></UpdateItems></AdminRoutes>,
          loader : ({params})=> fetch(`https://bistro-boss-recap-server-lake.vercel.app/menu/${params.id}`)
        },
      ]

    }
  ]);