import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Menu from "../Page/Menu/Menu";
import Contact from "../Page/Home/Contact";
import Orders from "../Page/OurShop/Orders";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'orders/:catagory',
          element:<Orders></Orders>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        }

    ]
  },
]);