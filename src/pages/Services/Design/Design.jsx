import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import Title from "../../../Components/Tittle";

const Design = () => {
     return (
          <div>
             
             <Container>
                         <div className=" my-10"><Title title={"Design"} ></Title></div>

                         <div className=" ">
                              <div className="  grid md:grid-cols-3 gap-4" >

                                   <Link to={'/portfolio'} className=" portfoliobox rounded-md servicesShadow">
                                        <img className="w-full h-96 overflow-hidden" src="https://img.freepik.com/free-vector/holi-colorful-calligraphic-lettering-poster-colorful-hand-written-font-with-paint-ink-splatters_460848-9714.jpg?w=900&t=st=1690180415~exp=1690181015~hmac=52709547d1a84d8bebc68711184e8e66c3881cca44264cf3a8b564f6cf77c55c" alt="" />
                                        <h1 className=" text-2xl mt-8 font-semibold my-3 text-center"> Print design </h1>
                                   </Link>
                                   <Link to={'/portfolio'} className=" portfoliobox rounded-md   servicesShadow">
                                        <img className="w-full h-96  overflow-hidden" src="https://img.freepik.com/free-psd/gold-logo-mockup-grey-wall_511564-1489.jpg?w=1380&t=st=1690180547~exp=1690181147~hmac=7448e0321dfc7b103ca0b439f90e40f65773070b870ff4078db5f5697087cf5a" alt="" />
                                        <h1 className=" text-2xl mt-8  font-semibold my-3 text-center ">  Logo design</h1>
                                   </Link>
                                   <Link to={'/portfolio'} className=" portfoliobox   rounded-md servicesShadow">
                                        <img className="w-full h-96 overflow-hidden " src="https://img.freepik.com/free-vector/elegant-minimal-black-yellow-business-card-template_1017-22513.jpg?w=826&t=st=1690180667~exp=1690181267~hmac=ef923fb1a0778a4445e3aae4a91e54c3b8d9e13e231c9548f32dc24d53b32070" />
                                        <h1 className=" text-2xl mt-8 font-semibold my-3  text-center"> Business Card</h1>
                                   </Link>

                              </div>

                              <div className="">
                              <h1 className="   text-center  text-4xl font-bold my-3 "> Our Support</h1>
                                   <div  className="  flex flex-wrap items-center justify-around">
                                        
                                        <h1 className=" my-2  text-xl  font-medium p-2 text-[#FF014F] shadow-md"> Services  for Business   </h1>
                                        <h1 className=" my-2  text-xl  font-medium p-2 text-[#FF014F] shadow-md"> Unlimited Edited  </h1>
                                        <h1 className=" my-2  text-xl  font-medium p-2 text-[#FF014F] shadow-md"> 24 Hours VIP Support </h1>
                                        <h1 className=" my-2  text-xl  font-medium p-2 text-[#FF014F] shadow-md">  Unlimited Revision</h1>
                                   </div>
                              </div>

                         </div>

                    </Container>

          </div>
     );
};

export default Design;