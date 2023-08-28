import Complited from "../../../CompiletteProject/Complited";
import Container from "../../../Components/Container";
import About from "../../About";
import Banner from "../../Bannar/Banner";
import Client from "../../Client/Clinet";
import Contact from "../../Contact/Contact";
import OurServices from "../../OurServices/Services/OurServices";
import Portfolio from "../../Portfolio/Portfolio";
import Services from "../../Services/Services";

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Container>
                    <About></About>
               </Container>
               <Complited></Complited>
               <Services></Services>

                <OurServices></OurServices>
               <Portfolio></Portfolio>
               <Client></Client>
               <Contact></Contact>
          </div>
     );
};

export default Home;