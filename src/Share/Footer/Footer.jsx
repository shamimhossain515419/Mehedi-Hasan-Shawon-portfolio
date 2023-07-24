import Container from '../../Components/Container'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {

     return (
          <div className='  py-16'>
               <Container>
                    <div className=' grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6' >
                         <div>
                              <div className='  flex  items-center  gap-4 '>
                                   <img className=' h-16 w-16 rounded-full ' src="https://i.ibb.co/bJJH8qk/Photo-Room-20230721-231040.png" alt="" />
                                   <h1 className=' text-xl font-semibold'> Mehedi Hasan Shawon</h1>
                              </div>

                              <div className='  mt-9 clear-left flex items-center  gap-8'>
                                   <Link to={'https://www.facebook.com/MehediHasanShawon3704'} target='_blank' className='footershadow  hover:bg-[#ff014df1] inline-block rounded-md  p-4' >
                                        <BsFacebook className=' text-[#0792fc] cursor-pointer ' size={30}></BsFacebook>
                                   </Link>
                                   <Link target='_blank' to={"https://www.instagram.com/leoshawon10i/?fbclid=IwAR17_kxT0vFJMej3GLbEQlofEUHO4oWy4ngJ0Ejg2l99lLopqVS528GRIAA"} className='footershadow  hover:bg-[#ff014df1] inline-block rounded-md  p-4' >
                                        <BsInstagram className=' text-[#ee07d3] cursor-pointer ' size={30}></BsInstagram>
                                   </Link>
                                   <Link target='_blank' to={'https://www.linkedin.com/in/mehedi-hasan-36b31a282/?fbclid=IwAR2XkWd1AB19wsCjk8JIxzIUQc2PZ67-7jKabG2setN52LcZzlVkroC-3qw'} className='footershadow  hover:bg-[#ff014df1] inline-block rounded-md  p-4' >
                                        <AiFillLinkedin className=' text-[#0A66C2] cursor-pointer ' size={30}></AiFillLinkedin>
                                   </Link >
                                   <Link to={'https://twitter.com/Mehedihasan3704?fbclid=IwAR0pLWIWjew-Zryh1QqdRWGttMX37foB6BFFwHYMy3wtVS6Ean9N29rtYYg'} target='_blank' className='footershadow  hover:bg-[#ff014df1] inline-block rounded-md  p-4' >
                                        <AiOutlineTwitter className=' text-[#0b82f2] cursor-pointer ' size={30}></AiOutlineTwitter>
                                   </Link >
                              </div>

                         </div>
                         <div>
                              <h1 className=' textColor text-xl  uppercase'> Support</h1>
                              <p>  How it works</p>
                              <p>Trust & Safety</p>

                              <p> Help Centre </p>
                         </div>
                         <div>
                              <h1 className=' textColor text-xl'> Useful Links</h1>
                              <p> About</p>
                              <p> Services</p>

                              <p> Context </p>
                              <p> Blog</p>

                         </div>
                         <div>
                              <h1 className=' textColor text-xl'> Office Address</h1>

                              <p>  Bogra  Fuldighi Bridge  5800 </p>

                              <p> Helpline: +8801705963704</p>
                              <p> (Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>


                              <p>Support 24/7 </p>

                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Footer;