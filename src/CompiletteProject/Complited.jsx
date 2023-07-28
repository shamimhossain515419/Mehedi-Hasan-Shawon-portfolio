import { FaGraduationCap } from 'react-icons/fa';
import { VscVmRunning } from 'react-icons/vsc';
import { PiStarHalf } from 'react-icons/pi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import './Completed.css'
import ScrollTrigger from 'react-scroll-trigger';
import Container from '../Components/Container';
import CountUp from 'react-countup';
import { useState } from 'react';
const Complited = () => {

     const [startCount,setSrartCount]=useState(false)
     return (
          <div className=" Completed md:h-[50vh] py-10">

               <Container>

                    <ScrollTrigger onEnter={()=>setSrartCount(true)} onExit={()=>setSrartCount(false)}>
                         <div className=' md:h-[40vh]  grid md:grid-cols-4 gap-4 text-white items-center'>
                              <div className=' my-2 text-center'>
                                   <VscVmRunning className=' block mx-auto' size={90}></VscVmRunning>
                                   <div className=' text-4xl font-bold'>
                                        {
                                             startCount && <CountUp end={150} duration={5} delay={0} /> 
                                         }+
                                     </div>
                                   <h1 className=' text-3xl font-medium'>Running Project</h1>
                              </div>
                              <div className=' my-2 text-center'>
                                   <FaGraduationCap className=' block mx-auto' size={90}></FaGraduationCap>
                                   <div className=' text-4xl font-bold'>
                                        {
                                             startCount && <CountUp end={250} duration={5} delay={0} /> 
                                         }+
                                     </div>
                                   
                                   <h1 className=' text-3xl font-medium'> Complete</h1>
                              </div>
                              <div className=' my-2 text-center'>
                                   <PiStarHalf className=' block mx-auto' size={90}></PiStarHalf>
                                   <div className=' text-4xl font-bold'>
                                        {
                                             startCount && <CountUp end={159} duration={5} delay={0} /> 
                                         }+
                                     </div>
                                   <h1 className=' text-3xl font-medium'> Satisfied Customers</h1>
                              </div>
                              <div className='my-2  text-center'>
                                   <div className='  p-2 rounded-full'>
                                        <HiOutlineUserGroup className=' block mx-auto' size={80}></HiOutlineUserGroup>
                                   </div>
                                   <div className=' text-4xl font-bold'>
                                        {
                                             startCount && <CountUp end={20} duration={5} delay={0} /> 
                                         }+
                                     </div>
                                   <h1 className=' text-3xl font-medium'> Team Members</h1>
                              </div>


                         </div>

                    </ScrollTrigger>

               </Container>

          </div>
     );
};

export default Complited;