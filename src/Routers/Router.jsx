import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Menu from "../Page/Menu/Menu";
import Contact from "../Page/Home/Contact";
import OurShop from "../Page/OurShop/OurShop";

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
          path:'ourshop/:catagory',
          element:<OurShop></OurShop>
        }

    ]
  },
]);