import React, { useEffect } from 'react'
import RoundedButton from "../app/common/RoundedButton";
import AOS from "aos"
import "aos/dist/aos.css"

function Services() {
    useEffect(() => {
    AOS.init({
        duration: 500, // Animation duration
        easing: 'ease-in-out-back', // Animation easing

    });
  }, []);
  return (
    <div className=' py-[60px] px-4 bg-[#EBEFF6]'>

        <div className='breaker container items-center gap-[80px]'>
    <div className='breaker-child-01 flex-col flex gap-[6vh]'>
<p className='font-normal text-para text-black'>
    Our Services
    </p>
   
<h2 className='blur-[9.43px text-black font-custom text-heading2 leading-[0.95] md:leading-[1]'>
    Gerax - Your trusted partner
    </h2 >
    </div>
    <div className='breaker-child-02 w-[40%]'>
<p className='text-black text-para font-normal leading-[1.45] md:leading-[1.5]'>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus esse, iure repudiandae quasi voluptate in odio impedit unde temporibus deserunt aut quo, obcaecati reiciendis quae quod tenetur, a corrupti.
   </p>
    </div>
  </div>
  <div className='container flex m-auto my-[20px] md:my-[15vh]'>
    <div  className='breaker md:gap-4 gap-[60px]'>
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
            <p className='font-custom text-4xl text-black'>service one</p>
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
            
        

    </div>

  </div>
    </div>
  )
}

export default Services


