import Container from "../../../Components/Container";
import About from "../../About";
import Banner from "../../Bannar/Banner";
import Contact from "../../Contact/Contact";
import Portfolio from "../../Portfolio/Portfolio";
import Services from "../../Services/Services";

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Container>
                    <About></About>
               </Container>

               <Services></Services>
               <Portfolio></Portfolio>
               <Contact></Contact>
          </div>
     );
};

export default Home;