import React, { useEffect, useRef } from 'react'
import RoundedButton from "../app/common/RoundedButton";
import AOS from "aos"
import "aos/dist/aos.css"
import { useInView,motion } from 'framer-motion';
import Scroll from '@/components/Scroll';

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
    useEffect(() => {
    AOS.init({
        duration: 500, // Animation duration
        easing: 'ease-in-out-back', // Animation easing

    });
  }, []);
  return (
    <div className=' pt-[60px] px-4 bg-[#EBEFF6'>

        <div className='breaker container items-center gap-[80px]'>
    <div data-aos={"fade-up"} data-aos-delay="0" data-aos-duration={1000}  className='breaker-child-01 flex-col flex gap-[6vh]'>
<p className='font-normal text-para text-white'>
    Our projects
    </p>
   
     {/* <div class=" blur-[9.43px text-white font-custom text-heading2 leading-[0.95] md:leading-[1]" >
  when&nbsp;
  <span class="relative inline-block pb-2">
    Conversion
    <svg 
      class="absolute bottom-0 left-0 w-full h-5 pointer-events-none" 
      viewBox="0 0 200 20" 
      preserveAspectRatio="none"
    >
      <path 
        d="M0,15 C50,30 150,0 200,15" 
        stroke="#C9FD74" 
        stroke-width="4" 
        fill="none" 
      />
    </svg>
  </span>
  &nbsp; matters, choose Agency-Name
</div> */}


  {/* <div className="text-white font-custom text-heading2 leading-[0.95] md:leading-[1] px-4 py-20">
      when&nbsp;
      <span ref={ref} className="relative inline-block px-1 py-1">
        <span className="relative z-10">conversion</span>

        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 220 60"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M20,35 
               C10,10 210,10 200,35 
               C190,60 30,60 20,35 
               M25,30 
               C20,15 200,15 195,30 
               C190,45 30,45 25,30"
            stroke="#f43f5e"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>
      </span>
      &nbsp;matters, choose memet
    </div> */}


  <div className="w-[80%] text-white font-custom text-heading2 leading-[0.95] md:leading-[1] py-20">
      {/* Where &nbsp; Vision Meets */}
     Projects That Define Our &nbsp;
       <span className="relative z-10">
        promise

        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 220 60"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M20,35 
               C10,10 210,10 200,35 
               C190,60 30,60 20,35 
               M25,30 
               C20,15 200,15 195,30 
               C190,45 30,45 25,30"
            stroke="#C9FD74"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </svg>
      </span>
     
      
    </div>






{/* <div class="text-4xl leading-snug">
  when&nbsp;
  <span class="relative inline-block px-2 py-1">
    <span class="relative z-10">conversion</span>
    <svg 
      class="absolute inset-0 w-full h-full z-0 pointer-events-none" 
      viewBox="0 0 220 60" 
      preserveAspectRatio="none"
    >
      <path 
        d="M20,35 
           C10,10 210,10 200,35 
           C190,60 30,60 20,35 
           M25,30 
           C20,15 200,15 195,30 
           C190,45 30,45 25,30" 
        stroke="#f43f5e" 
        stroke-width="3" 
        fill="none" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
  </span>
  &nbsp;matters, choose memet
</div> */}

{/* <h2 className='blur-[9.43px text-white font-custom text-heading2 leading-[0.95] md:leading-[1]'>
    Maryann - Your trusted partner
    </h2 > */}
    </div>
    <div data-aos={"fade-up"} data-aos-delay="0" data-aos-duration={1000} className='breaker-child-02 w-[40%] pb-[40px]'>
<p className='text-white text-para font-normal leading-[1.45] md:leading-[1.5]'>
  From exclusive residential estates to high-performing commercial developments, our projects reflect our commitment to quality, innovation, and investor growth. We’ve successfully launched and managed properties in prime locations, each designed with modern architecture, efficient space planning, and long-term value in mind. 
   </p>
    </div>
  </div>
  {/* <div className='container flex m-auto my-[20px] md:my-[15vh]'>
    <div  className='breaker md:gap-4 gap-[60px]'>
      <Scroll/>
        <div data-aos={"fade-up"} data-aos-delay="200" className=' bg-[#C9FD74] p-[30px] relative breaker-child rounded-2xl drop-shadow-lg'>
            <p className='text-black opacity-[0.43] absolute -top-[13%] right-2 font-custom text-[120px] leading-[120px]'>
                01
            </p>
            <p className='font-custom text-4xl text-black'>service one</p>
            <ol className='px-[30px] py-[60px]'>
                <li className='list-disc text-black font-normal text-para '>we offer x</li>
                <li className='list-disc text-black font-normal text-para '>we offer x</li>
                <li className='list-disc text-black font-normal text-para '>we offer x</li>
            </ol>
            <RoundedButton backgroundColor="white">
              <p className='font-normal text-button ls-05'>
              Learn More
              </p>
            </RoundedButton>
            </div>
             <div data-aos={"fade-up"} data-aos-delay="300" className=' bg-white p-[30px] relative breaker-child rounded-2xl drop-shadow-lg'>
            <p className='text-black opacity-[0.43] absolute -top-[13%] right-2 font-custom text-[120px] leading-[120px]'>
                02
            </p>
            <p className='font-custom text-4xl text-black'>service two</p>
            <ol className='px-[30px] py-[60px]'>
                <li className='list-disc text-black font-normal text-para '>we offer x</li>
                <li className='list-disc text-black font-normal text-para '>we offer x</li>
                <li className='list-disc text-black font-normal text-para '>we offer x</li>
            </ol>
            <RoundedButton >
              <p className='font-normal text-button ls-05'>
              Learn More
              </p>
            </RoundedButton>
            </div>
             <div data-aos={"fade-up"} data-aos-delay="400" className=' bg-[#C9FD74] p-[30px] relative breaker-child rounded-2xl drop-shadow-lg'>
            <p className='text-black opacity-[0.43] absolute -top-[13%] right-2 font-custom text-[120px] leading-[120px]'>
                03
            </p>
            <p className='font-custom text-4xl text-black'>service three</p>
            <ol className='px-[30px] py-[60px]'>
                <li className='list-disc text-black font-normal text-para '>we offer x</li>
                <li className='list-disc text-black font-normal text-para '>we offer x</li>
                <li className='list-disc text-black font-normal text-para '>we offer x</li>
            </ol>
            <RoundedButton backgroundColor="white">
              <p className='font-normal text-button ls-05'>
              Learn More
              </p>
            </RoundedButton>
            </div>


    </div>
  </div> */}
    </div>
  )
}

export default Services


