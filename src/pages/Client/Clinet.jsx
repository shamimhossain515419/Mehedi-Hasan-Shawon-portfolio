import { useEffect, useState } from "react";
import Title from "../../Components/Tittle";
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './Clinet.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from "../../Components/Container";
const Client = () => {
     const [clint, setClint] = useState([]);
     useEffect(() => {
          fetch('client.json').then(res => res.json()).then(data => {
               setClint(data);
          })
     }, [])

     console.log(clint);
     return (
          <div className=" hidden md:block">

               <Title title={"Client Feedback"}></Title>

               <div className=" my-20  py-11 clientBackround  flex justify-center items-center ">
                    <Container>
                         <div className="w-full md:px-20 md:max-w-5xl  ">
                              <div className=" w-full">
                                   <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                             delay: 2500,
                                             disableOnInteraction: false,
                                        }}

                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}

                                        className="mySwiper"
                                   >
                                        {
                                             clint && clint?.map(item =>
                                                  <SwiperSlide key={item.id}>
                                                       <div className=" text-center md:max-w-3xl  px-6 ">
                                                            <img className=" block mx-auto h-16 w-16 rounded-full" src={item.img} alt="" />
                                                            <h1 className=" text-3xl font-semibold  my-4"> {item.name} </h1>
                                                            <p className=" w-full     px-8 "> {item?.feedback} </p>
                                                       </div>
                                                  </SwiperSlide>

                                             )
                                        }


                                   </Swiper>
                              </div>
                         </div>

                    </Container>
               </div>
          </div>
     );
};

export default Client;