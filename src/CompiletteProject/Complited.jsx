import { FaGraduationCap } from 'react-icons/fa';
import { VscVmRunning } from 'react-icons/vsc';
import { PiStarHalf } from 'react-icons/pi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import './Completed.css'
import Container from '../Components/Container';

const Complited = () => {
     return (
          <div className=" Completed md:h-[50vh] py-10">

               <Container>
                    <div className=' md:h-[40vh]  grid md:grid-cols-4 gap-4 text-white items-center'>
                         <div className=' my-2 text-center'>
                              <VscVmRunning className=' block mx-auto' size={90}></VscVmRunning>
                              <h1 className=' text-4xl font-bold'> 100+</h1>
                              <h1 className=' text-3xl font-medium'>Running Project</h1>
                         </div>
                         <div className=' my-2 text-center'>
                              <FaGraduationCap className=' block mx-auto' size={90}></FaGraduationCap>
                              <h1 className=' text-4xl font-bold'> 400+</h1>
                              <h1 className=' text-3xl font-medium'> Complete</h1>
                         </div>
                         <div className=' my-2 text-center'>
                              <PiStarHalf className=' block mx-auto' size={90}></PiStarHalf>
                              <h1 className=' text-4xl font-bold'> 510+</h1>
                              <h1 className=' text-3xl font-medium'> Satisfied Customers</h1>
                         </div>
                         <div className='my-2  text-center'>
                              <div className='  p-2 rounded-full'>
                                   <HiOutlineUserGroup className=' block mx-auto' size={80}></HiOutlineUserGroup>
                              </div>
                              <h1 className=' text-4xl font-bold'> 20+</h1>
                              <h1 className=' text-3xl font-medium'> Team Members</h1>
                         </div>


                    </div>
               </Container>

          </div>
     );
};

export default Complited;