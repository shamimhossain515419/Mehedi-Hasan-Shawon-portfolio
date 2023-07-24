
import { NavLink } from 'react-router-dom'
const Manu = ({setOpen}) => {
     return (
          <div>
                <hr />
               <div className=' space-y-3 flex   flex-col '>
                    <NavLink  onClick={()=>setOpen(true)} className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/'}> Home</NavLink>
                    <NavLink  onClick={()=>setOpen(true)}   className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/about'}> About</NavLink>
                    <NavLink  onClick={()=>setOpen(true)}  className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/services'}> Services</NavLink>
                    <NavLink  onClick={()=>setOpen(true)}  className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/portfolio'}> My Portfolio</NavLink>
                    <NavLink   onClick={()=>setOpen(true)} className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/contact'}> contact</NavLink>
               </div>
          </div>
     );
};

export default Manu;