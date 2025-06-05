import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Background from '../../public/images/1.jpg';
import Image from 'next/image';


export default function Footer() {
    const textRef2=useRef(null)
     const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  const secondPara= "How i can Help?".split(" ")
    const secondPara2= "Not your Regular Email Developer".split(" ")
    const scale = useTransform(scrollYProgress, [0, 1], ["1", "2"])
   const {scrollYProgress:ss}= useScroll({
      target:textRef2,
      offset:["0.6 end",'end 0.8']
    })
    return (
        <div className=' min-h-[80vh] flex justify-end flex-col relative text-center bg-[#140D07]  py-[8vh] mx-auto'>
            <div ref={textRef2} once={true}  className="breaker gap-[30px] container mx-auto border-b border-gray-600 bglate-500 hf w-full flex py-[50px] box-border">
               <div className='breaker-child'>
                 <div className='flex items-start flex-col'>
                 <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} 
                 className='font-custom text-regular text-white text-left md:text-right'>
                Services
                  </motion.h2>
                  <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} 
                 className='font-custom text-regular text-white text-left md:text-right'>
                About
                  </motion.h2>
                  <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} 
                 className='font-custom text-regular text-white text-left md:text-right'>
                Contact
                  </motion.h2>
                  <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} 
                 className='font-custom text-regular text-white text-left md:text-right'>
                Free Consultation
                  </motion.h2>
                </div>
                </div>

               <div className='breaker-child gap-[10px] md:gap-[30px] flex flex-col'>
              <div className='flex flex-col'>
                  <h2 className='font-normal text-[14px] leading-[14px] text-white self-start md:self-end  text-left md:text-right w-[50%]'>BASEd IN COMPANY,</h2>
                <h2  className='font-normal text-[14px] leading-[14px] text-white self-start md:self-end  text-left md:text-right w-[50%]'>State Country</h2>
                <h2 className='font-normal text-[14px] leading-[14px] text-white self-start md:self-end  text-left md:text-right w-[50%]'>P.O Box</h2>
              
              </div>
               
                <div className='flex items-start md:items-end flex-col'>
                 <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} className='font-custom text-footer leading-[75px] text-white  text-left md:text-right'>
                  +123 45678910</motion.h2>
                <motion.h2 whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} className='font-custom text-footer leading-[75px]  text-white text-left md:text-right'>info@email.com</motion.h2>
                </div>
               </div>

                </div>
                <p className='text-[18px] pt-[20px]  font-normal text-white'>{new Date().getFullYear} All rights Reserved &copy; Company Name</p>
        </div>
    )
  }