import { useEffect } from "react";
import Footer from "../Share/Footer/Footer";
import Navbar from "../Share/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Main = () => {

     useEffect(() => {
          AOS.init();
     }, [])
     return (
          <div>
               <div>
               <Navbar></Navbar>
               </div>

               <div className=" mt-20">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Main;