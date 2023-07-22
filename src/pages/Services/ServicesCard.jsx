import Lottie from 'react-lottie';
import digitalAnimation1 from '../../assets/1.json'
import digitalAnimation2 from '../../assets/2.json'
import digitalAnimation3 from '../../assets/3.json'
import { AiOutlineArrowRight } from 'react-icons/ai'

const ServicesCard = () => {
     const defaultOptions1 = {
          loop: true,
          autoplay: true,
          animationData: digitalAnimation1,
          rendererSettings: {
               preserveAspectRatio: 'xMidYMid slice'
          }
     }
     const defaultOptions2 = {
          loop: true,
          autoplay: true,
          animationData: digitalAnimation2,
          rendererSettings: {
               preserveAspectRatio: 'xMidYMid slice'
          }
     }
     const defaultOptions3 = {
          loop: true,
          autoplay: true,
          animationData: digitalAnimation3,
          rendererSettings: {
               preserveAspectRatio: 'xMidYMid slice'
          }
     }
     return (
          <div className="  grid  md:grid-cols-3 gap-9 ">
               <div className="  servicesShadow p-3">
                    <div  className=' serviceBox'>
                         <Lottie options={defaultOptions1}
                              height={200}
                              width={200}
                         />
                         <div>
                              <h1 className=" text-3xl  font-medium my-4"> Digital Marketing</h1>
                              <p className=" text-base my-2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam asperiores aperiam veritatis qui voluptatibus? Blanditiis aliquid saepe ex doloremque tempore assumenda natus ut ipsam sint.</p>

                              <div className=' my-2 mt-4 cursor-auto'>
                                   <AiOutlineArrowRight size={30} className='  textColor'></AiOutlineArrowRight>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="  servicesShadow p-3">  
               <div  className='serviceBox'>
                    <Lottie options={defaultOptions2}
                         height={200}
                         width={200}
                    />
                    <div>
                         <h1 className=" text-3xl  font-medium my-4"> Design</h1>
                         <p className=" text-base my-2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam asperiores aperiam veritatis qui voluptatibus? Blanditiis aliquid saepe ex doloremque tempore assumenda natus ut ipsam sint.</p>

                         <div className='  mt-4 my-2'>
                              <AiOutlineArrowRight size={30} className=' w-20 textColor'></AiOutlineArrowRight>
                         </div>
                    </div>
               </div>
               </div>
               <div className="  servicesShadow p-3"> 
                <div  className='serviceBox'>
                    <Lottie options={defaultOptions3}
                         height={200}
                         width={200}
                    />
                    <div>
                         <h1 className=" text-3xl  font-medium my-4">Lead Generation </h1>
                         <p className=" text-base my-2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam asperiores aperiam veritatis qui voluptatibus? Blanditiis aliquid saepe ex doloremque tempore assumenda natus ut ipsam sint.</p>

                         <div className='   mt-4 my-2'>
                              <AiOutlineArrowRight size={30} className=' w-20 textColor'></AiOutlineArrowRight>
                         </div>
                    </div>
               </div>
               </div>
          </div>
     );
};

export default ServicesCard;