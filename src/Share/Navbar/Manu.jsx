
import { NavLink } from 'react-router-dom'
const Manu = () => {
     return (
          <div>
                <hr />
               <div className=' space-y-3 flex   flex-col '>
                    <NavLink  className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/'}> Home</NavLink>
                    <NavLink   className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/about'}> About</NavLink>
                    <NavLink  className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/resume'}> My Resume</NavLink>
                    <NavLink  className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/portfolio'}> My Portfolio</NavLink>
                    <NavLink  className={({isActive})=> isActive ? `  text-white   border-b-2 border-[#FF014F] text-lg font-semibold   uppercase ` : ` text-[#c1b9b9]  text-lg font-semibold   uppercase` } to={'/contact'}> contact</NavLink>
               </div>
          </div>
     );
};

export default Manu;