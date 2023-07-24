import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import Title from "../../../Components/Tittle";

const DigitalMarketing = () => {
     return (
          <div>


               <div>
                    <Container>
                         <div className=" my-10"><Title title={"Digital Marketing"} ></Title></div>

                         <div className=" ">
                              <div className="  grid md:grid-cols-3 gap-4" >

                                   <Link to={'/portfolio'} className=" portfoliobox rounded-md servicesShadow">
                                        <img className="w-full h-96 overflow-hidden" src="https://i.ibb.co/JFtLVfW/Blue-Minimalist-Social-Media-Marketing-Instagram-Post.png" alt="" />
                                        <h1 className=" text-2xl mt-8 font-semibold my-3 text-center"> Social Media Marketing</h1>
                                   </Link>
                                   <Link to={'/portfolio'} className=" portfoliobox rounded-md   servicesShadow">
                                        <img className="w-full h-96  overflow-hidden" src="https://i.ibb.co/LNDDVGQ/3-D-Gradient-Email-Marketing-Infographic-Instagram-Post-2-1.png" alt="" />
                                        <h1 className=" text-2xl mt-8  font-semibold my-3 text-center "> Email Marketing</h1>
                                   </Link>
                                   <Link to={'/portfolio'} className=" portfoliobox   rounded-md servicesShadow">
                                        <img className="w-full h-96 overflow-hidden " src="https://i.ibb.co/vYXGGdd/3-D-Gradient-Email-Marketing-Infographic-Instagram-Post-1-1.png" />
                                        <h1 className=" text-2xl mt-8 font-semibold my-3  text-center"> Social Media Marketing</h1>
                                   </Link>

                              </div>

                              <div className="">
                              <h1 className="   text-center  text-4xl font-bold my-3 "> Our Support</h1>
                                   <div  className="  flex flex-wrap items-center justify-around">
                                        
                                        <h1 className=" my-2  text-xl  font-medium p-2 text-[#FF014F] shadow-md"> Services  for Business   </h1>
                                        <h1 className=" my-2  text-xl  font-medium p-2 text-[#FF014F] shadow-md"> LinkedIn Outreach  </h1>
                                        <h1 className=" my-2  text-xl  font-medium p-2 text-[#FF014F] shadow-md"> 24 Hours VIP Support </h1>
                                        <h1 className=" my-2  text-xl  font-medium p-2 text-[#FF014F] shadow-md">  Unlimited Revision</h1>
                                   </div>
                              </div>

                         </div>

                    </Container>
               </div>
          </div>
     );
};

export default DigitalMarketing;