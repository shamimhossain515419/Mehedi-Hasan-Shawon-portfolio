import { useState } from "react";

const ServicesCard = ({ Card }) => {
     const { title, icon, description } = Card;
     const [Open, setOpen] = useState(false)
     const Icon = icon;
     const handleRow=()=>{
       console.log('shamim gad');
       setOpen(true)
     }
     return (
          <div data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">
               <div>
                    <Icon className=" block text-center mx-auto text-white" size={45}></Icon>
                    <h1 className="  capitalize text-3xl  text-white my-5 font-semibold  "> {title}</h1>
                    <p className=" text-lg font-normal my-2"> {Open==true? description : description.slice(0,200)}   {Open ==true ? <><span onClick={()=>setOpen(false)} className=' text-[#588de3] cursor-pointer  underline'>less more</span> </> : <> <span onClick={handleRow} className=' cursor-pointer text-[#588de3]  underline'>Read More</span> </> } </p>
               </div>
          </div>
     );
};

export default ServicesCard;