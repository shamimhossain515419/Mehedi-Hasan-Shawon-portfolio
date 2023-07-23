import { useEffect, useState } from "react";
import Container from "../../Components/Container";
import Title from "../../Components/Tittle";
import { json } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
    
     const [project, setProject] = useState([]);
     const [active, setActive] = useState(1);
     const [category, setCategory] = useState([]);

     useEffect(() => {
          fetch('Project.json').then(res => res.json()).then(data => setProject(data))
          fetch('category.json').then(res=>res.json()).then(data=>{
               setCategory(data)
         })
     }, [])


     return (
          <div className=" my-20">
               <Container>
                    <Title title={" My Portfolio"}></Title>

                    <div className=" flex  my-10  items-center justify-center  gap-3  flex-wrap ">
                               {
                                   category && category?.map(item=>  <button key={item.id} onClick={()=>setActive(item.id)} className={` ${active==item.id ?"bg-[#FF014F] text-white  border-2   border-[#FF014F]  rounded-xl py-1 px-4  font-medium text-xl" : "  border-2 hover:text-[#FF014F]  border-[#FF014F]  rounded-xl py-1 px-4  font-medium text-xl"}`}>  {item.category} </button>)
                               }
                          
                              
                         </div>
                    <div>

                    </div>
                    <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-6" >

                         {
                              project?.map(item => <PortfolioCard key={item.id} item={item}></PortfolioCard> )
                         }
                        
                    </div>


  
               </Container>
          </div>
     );
};

export default Portfolio;