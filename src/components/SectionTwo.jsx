import InfiniteScrollX from '@/app/effects/InfiniteScrollX'
import SlideUpText from '@/app/effects/SlideUpText'
import React, { useRef } from 'react'
import globe from '../../public/images/globe-icon.svg';
import { motion, useScroll, useTransform} from 'framer-motion';


function SectionTwo() {
   const globeRef = useRef();
    const { scrollYProgress } = useScroll({
      target: globeRef,
      offset: ['start end', 'end start']
    })
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.3])
  return (
  <div ref={globeRef} className="relative w-full min-h-screen pt-[10vh] overflow-clip">
  <motion.div
    style={{ scale}}
    className="bg-slate-400  "
  >
    <img src={globe.src} className="mx-auto absolute left-1/2 top-[0px] -translate-x-1/2 object-cove w-[400px]" alt="Globe" />
  </motion.div>

 <div className='w-full bg-[#8fb355 p-4 '>
     <InfiniteScrollX className={'font-custom pr-[50px] text-[68px] leading-[58px] md:text-[120px] md:leading-[78px] lg:text-[154px] lg:leading-[118px] uppercase'} text={'current state of AI - '}/>
 </div>

<div className='breaker container mx-auto  py-[60px] m-0 border-0 '>
<div className='breaker-child flex items-start m-0 border-0 px-4 py-8'>
    <h4 className='font-custom2 text-[28px] text-[#C9FD74] uppercase'>
      [ A short introduction ]
      </h4>
  </div>
  <div className='breaker-child flex items-start gap-8 flex-col px-4 py-8'>
  <h4 className='font-custom2 text-para w-10/12'>
      <SlideUpText margin='-180px' once={true} gap='4px' center={false} duration={0.4} delay={0.04} className="text-[#C9FD74] capitalize font-normal text-[18px] leading-normal inline-flex overflow-hidden" 
     text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio suscipit, rerum odit provident eos aliquid aliquam dolorum dignissimos fugit qui perferendis consectetur."}/> 
    </h4>
    <h4 className='font-custom2 text-para w-10/12'>
      <SlideUpText margin='-180px' once={true} gap='4px' center={false} duration={0.4} delay={0.04} className="text-[#C9FD74] capitalize font-normal text-[18px] leading-normal inline-flex overflow-hidden" 
     text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio suscipit, rerum odit provident eos aliquid aliquam dolorum dignissimos fugit qui perferendis consectetur in enim voluptate vel, deserunt mollitia similique ratione."}/> 
    </h4>
  </div>
</div>
</div>
  )
}

export default SectionTwo