

import ServicesData from './servicesData'

import ServicesCard from "./OurServicesCard";
import Container from '../../../Components/Container';
import Title from '../../../Components/Tittle';
import { useState } from 'react';
import {BiChevronDown} from 'react-icons/bi'

const OurServices = () => {
     const [limit, setSetLimit] = useState(6)
     return (
          <div className=" py-10">
               <Container>
                    <div className=" text-center  my-14">
                         <Title title={"OUR SERVICES"}></Title>
                    </div>


                    <div className=" md:m-20">
                         <div className=" grid md:grid-cols-3 gap-10 ">
                              {
                                    ServicesData && ServicesData.slice(0, limit)?.map((item, index) => <ServicesCard key={index} Card={item}></ServicesCard>)
                              }




                         </div>

                         {
                              ServicesData?.length <= limit ? "" : <> <div className="  mt-9  cursor-pointer text-center">
                                   <div onClick={() => setSetLimit(limit + 3)} className="    hover:bg-transparent hover:border hover:border-[#ff014df1] text-2xl font-medium px-10 py-[5px] rounded-2xl bgColor text-white inline-block" >  <div className=" flex  items-center justify-center gap-2  ">
                                        <span className=" text-base"> See More </span> <BiChevronDown size={18}></BiChevronDown></div>
                                   </div>
                              </div> </>
                         }
                    </div>


               </Container>
          </div>
     );
};

export default OurServices;