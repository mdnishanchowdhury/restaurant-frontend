import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Menu from "../Page/Menu/Menu";
import Contact from "../Page/Home/Contact";
import Orders from "../Page/OurShop/Orders";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Page/Dashboard/Cart/Cart";
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";
import AddItems from "../Page/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Page/Dashboard/ManageItems/ManageItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'orders/:catagory',
        element: <Orders></Orders>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '*',
        element: <h2>NO ROUTE</h2>
      }

    ]
  },
  {
    path: 'dashboard',
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      // normal users route
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      // admin routes
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },

      {
        path: '*',
        element: <h2>NO ROUTE</h2>
      }
    ]
  }
]);