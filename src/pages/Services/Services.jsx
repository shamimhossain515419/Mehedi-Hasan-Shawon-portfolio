import Container from "../../Components/Container";
import Title from "../../Components/Tittle";
import ServicesCard from "./ServicesCard";

const Services = () => {

  
     return (
          <div className=" my-20">
               <Container>


                    <Title title={"Services"} paragraph={"Job Description for a Digital Marketer with 2 years of experience in Lead Generation and Data Entry"}></Title>


                    <div className=" mt-10">
                       <ServicesCard></ServicesCard>
                    </div>

               </Container>




          </div>
     );
};

export default Services;