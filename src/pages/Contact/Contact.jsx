import { AiFillLinkedin } from "react-icons/ai";
import Container from "../../Components/Container";
import Tittle from '../../Components/Tittle'
import './Contact.css'
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
const Contact = () => {
     const form = useRef();
     const sendEmail = (e) => {
          e.preventDefault();

          const from = e.target;
          emailjs.sendForm('service_4upm03s', 'template_chiautz', form.current, 'gTkzVf4IG7hauN8Xt')
               .then((result) => {
                    console.log(result.text);
                    from.reset();
                    Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: 'Your work has been saved',
                         showConfirmButton: false,
                         timer: 1500
                    })
               }, (error) => {
                    console.log(error.text);
               });
     };


     return (
          <div className=" my-8">
               <div className=" my-10">
                    <Tittle title={"Contact With Me"} ></Tittle>
               </div>

               <Container>

                    <div className=" my-20  grid md:grid-cols-5 gap-10">

                         <div data-aos="fade-up"
                              data-aos-anchor-placement="center-bottom" className=" fontRoboto contactshadow col-span-2 rounded-2xl">
                              <div className=" p-2  ">
                                   <img className=" w-full h-70 object-cover" src="https://i.ibb.co/BGrZtZq/contact1.png" alt="" />
                                   <div className=" space-y-2 p-3">
                                        <h2 className=" text-3xl  font-medium "> Chief Operating Officer</h2>
                                        <p className="   text-xl leading-8"> I am available for freelance work. <br /> Connect with me via and call in to my account.</p>
                                        <div>  <p className=" text-lg font-medium">  Phone: <span className=" hover:text-[#FF014F] hover:underline"> +8801705963704</span> </p>
                                             <p className=" text-lg font-medium">  Email: <span className=" hover:text-[#FF014F] hover:underline"> mehedihasan63704@gmail.com</span> </p></div>
                                        <h1 className=" text-base font-medium  uppercase my-2"> Find With Me</h1>
                                        <div className=" flex items-center gap-7  my-10 ">

                                             <Link to={'https://www.facebook.com/MehediHasanShawon3704'} target='_blank' className='footershadow   hover:-translate-y-2 duration-300 inline-block rounded-md  p-4' >
                                                  <BsFacebook className=' text-[#0792fc] cursor-pointer ' size={30}></BsFacebook>
                                             </Link>
                                             <Link target='_blank' to={"https://www.instagram.com/leoshawon10i/?fbclid=IwAR17_kxT0vFJMej3GLbEQlofEUHO4oWy4ngJ0Ejg2l99lLopqVS528GRIAA"} className='footershadow   hover:-translate-y-2 duration-300 inline-block rounded-md  p-4' >
                                                  <BsInstagram className=' text-[#ee07d3] cursor-pointer ' size={30}></BsInstagram>
                                             </Link>
                                             <Link target='_blank' to={'https://www.linkedin.com/in/mehedi-hasan-36b31a282/?fbclid=IwAR2XkWd1AB19wsCjk8JIxzIUQc2PZ67-7jKabG2setN52LcZzlVkroC-3qw'} className='footershadow   hover:-translate-y-2 duration-300 inline-block rounded-md  p-4' >
                                                  <AiFillLinkedin className=' text-[#0A66C2] cursor-pointer ' size={30}></AiFillLinkedin>
                                             </Link >
                                        </div>

                                   </div>
                              </div>
                         </div>
                         <div className=" fontRoboto contactshadow col-span-3 md:px-20  py-3">
                              <div>
                                   <form ref={form} onSubmit={sendEmail}>
                                        <div className=" w-full flex  items-center  justify-between gap-10">
                                             <div className="  w-full ">
                                                  <label htmlFor="Fist Name" className=" uppercase  text-sm font-normal "> Fist Name</label>
                                                  <input type="text " required className=" inpputbox w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="from_name" id="" />
                                             </div>
                                             <div className="  w-full ">
                                                  <label htmlFor="Last Name" className=" uppercase text-sm font-normal "> Last Name</label>
                                                  <input type="text " required className=" inpputbox w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="" id="" />
                                             </div>
                                        </div>
                                        <div className="  w-full ">
                                             <label htmlFor="Your Email" className=" uppercase text-sm font-normal "> Your Email</label>
                                             <input type="email " className=" inpputbox w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="from_email" id="" />
                                        </div>
                                        <div className="  w-full ">
                                             <label htmlFor="Subject" className=" uppercase text-sm font-normal "> Subject</label>
                                             <input type="text " required className=" inpputbox w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="" id="" />
                                        </div>
                                        <div className="  w-full ">
                                             <label htmlFor="Your massage" className=" uppercase text-sm font-normal "> Your massage</label>
                                             <textarea required className=" c w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="message" id="" cols="30" rows="7"></textarea>
                                        </div>
                                        <div className=" contactshadow "> <button type="submit" className="  block  
                                    text-xl font-medium px-10 py-[7px] rounded-2xl   w-full  mt-7 border border-[#ff014df1]  hover:bg-[#ff014df1]  text-white">DOWNLOAD MY CV</button></div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </Container>


               <div>
                    <iframe className=" w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d460372.55072448467!2d89.0650805!3d25.6493892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fccdcecf5fefc9%3A0x68bf330fbc933bd3!2sRangpur%20District!5e0!3m2!1sen!2sbd!4v1690024317902!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" ></iframe>
               </div>
          </div>
     );
};

export default Contact;