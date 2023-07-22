import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../pages/About";
import Home from "../pages/Home/Home/Home";

const Route = createBrowserRouter([
     {
           path:'/',
           element:<Main></Main>,
           children:[
               {
                    path:'/',
                    element:<Home></Home>
               },
               {
                     path:'/about',
                     element:<About></About>
               }
           ]
     }
])
export default Route;