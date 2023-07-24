import { TypeAnimation } from "react-type-animation";
import Container from "../../Components/Container";

const Banner = () => {
     return (
          <Container>
               <div>
                    <div className=" fontfamily grid md:grid-cols-2   mb-4 md:h-[80vh]  items-center ">
                         <div data-aos="fade-right" className="  p-3 space-y-2 ">
                              <h3 className="  text-[#eed80b]  text-3xl font-medium"> WELCOME TO MY  PORTFOLIO  </h3>

                              <h1 className=" tracking-tight text-3xl  md:text-5xl my-5 py-3 font-bold"> Hi, I’m Mehedi Hasan  <span className=" textColor">  Shawon</span>  </h1>

                              <TypeAnimation
                                   sequence={[
                                        // Same substring at the start will only be typed once, initially
                                        'A Professional Digital  Marketer',
                                        2000,
                                        'A Professional   Designer',
                                        2000,
                                        'A Professional   Lead Generation',
                                        2000,
                                        'A Professional   Designer',
                                        2000,
                                   ]}
                                   speed={30}
                                   className="text-xl  md:text-4xl  font-bold"

                                   repeat={Infinity}
                              />
                              <div>
                              <div className=" shadow-xl inline-block  px-3 py-2  rounded-2xl">
                                   <button className="  block  hover:bg-transparent hover:border hover:border-[#ff014df1] text-2xl font-medium px-10 py-[5px] rounded-2xl bgColor text-white">See More</button>
                              </div>
                              </div>
                         </div>
                         <div data-aos="fade-left"  className=" boxshawdow  p-3 rounded-lg">
                              <img className=" object-cover  w-full  p-5  h-[80vh] " src="https://i.ibb.co/bJJH8qk/Photo-Room-20230721-231040.png" alt="" />
                         </div>
                    </div>
               </div>

               <div>

               </div>
          </Container>
     );
};

export default Banner;