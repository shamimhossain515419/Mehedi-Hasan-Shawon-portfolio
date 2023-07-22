import Container from "../../../Components/Container";
import About from "../../About";
import Banner from "../../Bannar/Banner";
import Contact from "../../Contact/Contact";
import Services from "../../Services/Services";

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Container>
                    <About></About>
               </Container>

               <Services></Services>
               <Contact></Contact>
          </div>
     );
};

export default Home;