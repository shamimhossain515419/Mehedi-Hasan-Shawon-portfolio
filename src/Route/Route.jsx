import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../pages/About";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";
import LeadGenaration from "../pages/Services/LeadGenaretion/LeadGenaration";
import DigitalMarketing from "../pages/Services/DigitalMarketing/DigitalMarketing";
import Design from "../pages/Services/Design/Design";

const Route = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/about',
                        element: <About></About>
                  },
                  {
                        path: '/services',
                        element: <Services></Services>
                  },
                  {
                        path: '/portfolio',
                        element: <Portfolio></Portfolio>
                  },
                  {
                        path: '/contact',
                        element: <Contact></Contact>
                  },
                  {
                        path: '/leadgenaretion',
                        element: <LeadGenaration></LeadGenaration>
                  },
                  {
                        path: '/digitalmarketing',
                        element: <DigitalMarketing></DigitalMarketing>
                  },
                  {
                        path: '/design',
                        element: <Design></Design>
                  }
            ]
      }
])
export default Route;