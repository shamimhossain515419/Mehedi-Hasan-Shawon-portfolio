
const About = () => {
     return (
          <div className="  my-20">
               <div className="grid  items-center md:grid-cols-2 gap-5 ">
                    <div className=" boxshawdow aboutimg  rounded-xl  p-6 md:p-10 relative overflow-hidden ">
                         <img className="   md:h-[500px] 4 object-cover w-full  " src="https://i.ibb.co/1s108dX/Picsart-23-05-15-12-25-41-791.jpg" alt="" />
                    </div>
                    <div className=" p-4 md:max-w-[600px]">
                         <p className=" text-2xl font-medium  textColor my-2"> VISIT MY PORTFOLIO & HERE ME</p>
                         <h1 className=" text-5xl font-bold my-2">About Me</h1>
                         <p className="  text-base font-normal"> As a Digital Marketer with 2 years of experience in Lead Generation and Data Entry, you will play a crucial role in driving the growth of the company through effective lead generation strategies and maintaining accurate data records. You will be responsible for identifying potential customers,  <p  className=" mt-4"></p> collecting data, and ensuring the seamless entry of information into various systems. Your expertise will contribute to the overall success of marketing campaigns and business development initiatives.</p>
                         <div className=" my-2 shadow-xl inline-block  px-3 py-2  rounded-2xl">
                                   <button className="  block  
                                    text-xl font-medium px-10 py-[5px] rounded-2xl  border border-[#ff014df1]  hover:bg-[#ff014df1]  text-white">DOWNLOAD MY CV</button>
                              </div>
                    </div>

               </div>
          </div>
     );
};

export default About;