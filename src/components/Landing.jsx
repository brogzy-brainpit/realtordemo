import React, { useEffect, useRef, useState } from 'react'
import RoundedButton from "../app/common/RoundedButton"
import SlideUpText from '@/app/effects/SlideUpText'
import { useInView,motion,} from 'framer-motion'
import insta from "../../public/images/insta.png"
import facebook from "../../public/images/facebook.png"
import twitter from "../../public/images/twitter.png"
import linkedin from "../../public/images/linkedin.png"
import Magnetic from '@/app/effects/Magnetic'
import Link from 'next/link'
import CalModalButton from './CalModalButton'
import ScrambleText from '@/app/effects/ScrambleText'
import Image from 'next/image'
import Button from './Button'

function Landing() {

      const [wait,setIswait]= useState(true)
     useEffect(()=>{
          setTimeout(() => {
            setIswait(false)
          }, 3000);
        },[])

  return (

   <section className=' hero-section h-[calc(100vh-0px)]'>
     <div class="background-wrapper">
     <div class=" custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-pan-overlay opacity-5">
     </div>

<div className='background-video'> 
  <motion.div className='w-full h-full'  initial={{ scale: 1.3 }}
      animate={!wait ? { scale: 1} : {}}
      transition={{ duration: 15, ease: "easeOut" }}>
  <img width={100} height={100}  loading='lazy' src='/images/hero.jpg' className='h-full w-full object-cover'/>

  </motion.div>
</div>
<div className='background-rgba'> &nbsp;</div>
<div className='md:block hidden absolute right-[40px] bottom-[50px]' >
  <motion.img 
   initial={{ scale: 0, y: 20 }}
      animate={!wait ? { scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
  className='w-[100px]' src='https://www.sogaiart.com/_next/static/media/ring.451bad66.svg'/>
</div>
<div class=" container mx-auto z-10 relative content flex justify-center items-center h-full flex-col gap-2 p-4">
{!wait && 
  <div class="my-8 px-  w-full bg-slate600 b-slate-50 conten flex justify-end items-start h-full flex-col gap-4">
    <ScrambleText letters='+-+-+-+-+-+-+-+-+-+-+-+-+-+-' hoverEffect={false} 
    className={'uppercase text-white text-[24px] leading-[20px] md:text-[40px] md:leading-[48px] lg:text-[54px] lg:leading-[48px] font-custom2 transition-all duration-200 ease-in-out'}
     text="A short journey into" />
     <h1 className="font-custom text-heading leading-[0.85] md:leading-[90px]' uppercase text-center max-w-[80vw] md:max-w-[80vw] gap-3 flex items-center justify-center flex-wrap"> 
   
    {/* <SlideUpText center={false} duration={0.30} delay={0.10} className=" capitalize font-custom text-heading inline-flex overflow-hidden" 
    text={` Generative AI in the Fine Arts`}/>  */}
    <ScrambleText letters='+ - + - + - + - + - +' letter='R3H547F7NS10 10 iP LPO VZQW P086'  
    className={'text-white tracking-tighter text-left uppercase text-[48px] leading-[48px] md:text-[90px] md:leading-[78px] lg:text-[123px] lg:leading-[118px] font-custom transition-all duration-200 ease-in-out'}
     text="Real Estate Built for Growth" />
    </h1>
<RoundedButton>
  <CalModalButton  text='free Consultation'/>

</RoundedButton>
    
  </div>

}

  </div>

</div>
   </section>
    //  </div>

  )
}

export default Landing