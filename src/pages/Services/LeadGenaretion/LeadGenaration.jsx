import Container from "../../../Components/Container";
import Title from "../../../Components/Tittle";

const LeadGenaration = () => {
     return (
          <div>
               <Container>
                    <div className=" my-10"><Title title={"Lead Generation"} ></Title></div>

                    <div className=" grid md:grid-cols-2 gap-7">
                         <div data-aos="fade-up-right"  className="  boxshawdow p-2" >
                              <img className=" h-[600px] w-full " src="https://i.ibb.co/JFgdj0s/1686485595758.png" alt="" />
                         </div>

                         <div data-aos="fade-down-left" className="  grid md:grid-cols-2 gap-5 ">

                              <div className=" shadow-xl p-2">
                             <h1 className=" text-5xl font-bold my-3 "> Our Services</h1>
                                    <div className="">
                                    <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2 ">1. Data mining </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2"> 2. Data Collection </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2">3. Data Extraction </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2"> 4. Email Collection  </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2">5. Email List Building  </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2">6. LinkedIn Outreach  </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2">7. LinkedIn Data Mining </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2"> 8. Email Leads Generation</h1>
                                    </div>
                              </div>
                              <div className=" shadow-xl p-2">
                                   <h1 className=" text-4xl font-bold my-3 "> Our Support</h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2">   Services for Business  </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2">LinkedIn Outreach  </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2"> 24 Hours VIP Support </h1>
                                   <h1 className=" my-2  text-xl  font-medium hover:text-[#FF014F]  duration-300 cu hover:translate-x-2">  Unlimited Revision</h1>
                              </div>
                         </div>






                    </div>

               </Container>
          </div>
     );
};

export default LeadGenaration;