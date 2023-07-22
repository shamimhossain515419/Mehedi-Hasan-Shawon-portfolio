

const Title = ({title,paragraph}) => {
     return (
          <div className=" fontfamily  max-w-[600px] mx-auto text-center  ">
                 <div className=" flex justify-center items-center gap-2 flex-col">
                 <h1 className=" text-white font-semibold  text-3xl md:text-5xl     "> {title}</h1>
                 <div className=" title_bar flex justify-center items-center">  
                   <div className=" w-[80px] h-full bg-[#ff014df1]">
                     
                   </div>
                 </div>
                 <p className=" text-base   font-medium"> {paragraph}</p>
                 </div>
          </div>
     );
};

export default Title;