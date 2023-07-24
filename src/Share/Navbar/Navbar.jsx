

import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'

import { useState } from 'react';
import Manu from './Manu';
import Container from '../../Components/Container';

const Navbar = () => {
     const [Open, setOpen] = useState(true)
     return (
          <nav className='px-2 w-full bg-black fixed       top-0  left-0 right-0 z-50   py-2 shadow-lg'>
               <Container>
                    <div>
                         <div className=' flex justify-between items-center'>
                              <div className=' flex  items-center gap-4'>
                                   <img className=' h-14 w-14 rounded-full' src="https://i.ibb.co/bJJH8qk/Photo-Room-20230721-231040.png" alt="" />
                                  <Link to={'/'}> <h1 className='  font-semibold  text-4xl text-color '> Shawon </h1></Link>
                              </div>
                              <div className=' hidden md:block  space-x-5'> 
                                   <NavLink className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/'}> Home</NavLink>
                                   <NavLink className={({isActive})=> isActive ? ` border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/about'}> About</NavLink>
                                   <NavLink className={({isActive})=> isActive ? ` border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/services'}> Services</NavLink>
                                   <NavLink className={({isActive})=> isActive ? ` border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/portfolio'}> My Portfolio</NavLink>
                                   <NavLink className={({isActive})=> isActive ? ` border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/contact'}> contact</NavLink>
                              </div>

                              <div onClick={()=>setOpen(!Open)} className=' md:hidden '>

                                   {
                                        Open ? <FaBars size={24} className=' '> </FaBars> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                   }

                              </div>
                         </div>
                        
                         <div className='  md:hidden'>
                         {
                          Open ? "" : <Manu setOpen={setOpen}></Manu>    
                         }
                         </div>
                        
                         
                    </div>
               </Container>

          </nav>
     );
};

export default Navbar;