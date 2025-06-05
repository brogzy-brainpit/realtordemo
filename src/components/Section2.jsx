import React, { useRef } from 'react'
import RoundedButton from "../app/common/RoundedButton"
import SlideUpText from '@/app/effects/SlideUpText'
import { useInView,motion, useScroll, useTransform } from 'framer-motion'
import snow from "../../public/images/snow.jpg"
import Image from 'next/image'

function Section2() {
   const textRef2=useRef(null)
     const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  const secondPara= "How i can Help?".split(" ")
    const secondPara2= "Embrace the Saanen land Lifestyle".split(" ")
   const {scrollYProgress:ss}= useScroll({
      target:textRef2,
      offset:["0.6 end",'end 0.8']
    })
  return (
   <section className='hero-section min-h-[calc(100vh-0px)]  '>
     <div className="background-wrapper  py-[100px] px-4">
  <Image src={snow}  className="background-video2"/>
<div className='background-rgba'> &nbsp;</div>
  
  <div className='breaker container items-center gap-[80px]'>
    <div className='breaker-child-01 flex-col flex gap-[6vh]'>
<p className='font-normal text-para text-white'>Timeless Elegance</p>
    <h1 ref={textRef2} once={true}  className=" text-white text-[7.5vw] font-custom uppercase text-center max-w-[90vw] md:max-w-[50vw] leading-none gap-3 flex items-cente justif-center flex-wrap" gap='10px'>
{secondPara2.map((word,i)=>{
    var start= i/secondPara2.length;
    var end= start+ (1/secondPara2.length);
    return <Word key={i} range={[start,end]} word={word} progress={ss}/>
  })}
</h1>
{/* <h2 className='blur-[9.43px] text-white font-custom text-heading leading-[0.95] md:leading-[1]'>Embrace the Saanenland Lifestyle</h2 > */}
    </div>
    <div className='breaker-child-02 w-[40%]'>
<p className='text-white text-para font-normal leading-[1.45] md:leading-[1.5]'>From the majestic Alps to the vibrant villages, the Saanenland boasts a harmonious blend of natural beauty and urban sophistication. Buying or renting property here means immersing yourself in a lifestyle characterized by security, stability, and exclusivity.</p>
    </div>
  </div>

   
   
    <div className=' mt-[80px] breaker container items-center gap-[80px]'>
    <div className='breaker-child-01 flex-col flex gap-[6vh]'>
<p className='w-[90%] text-white text-para font-normal leading-[1.45] md:leading-[1.5]'>From the majestic Alps to the vibrant villages, the Saanenland boasts a harmonious blend of natural beauty and urban sophistication. Buying or renting property here means immersing yourself in a lifestyle characterized by security, stability, and exclusivity.</p>
   
    </div>
    {/* <div className='breaker-child-02 w-[40%]'> */}
    {/* </div> */}
  </div>


</div>
   </section>

  )
}

export default Section2

const Word=({word,progress,range})=>{
    const textOpacity= useTransform(progress,range,[0,1])
    return(
  <span className='relative text-customColor text-center flex justify-center'>
    <span style={{opacity:0.09}}   className='mr-[10px] absolute text-center flex justify-center' >{word}</span>
    <motion.span style={{opacity:textOpacity}}   className='mr-[10px]' >{word}</motion.span>
  
  </span>
    )
  }
