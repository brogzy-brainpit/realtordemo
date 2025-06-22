'use client'
import React, { useEffect, useRef, useState } from 'react'
import img1 from "../../public/images/hero.png"
import sv1 from "../../public/images/service01.png"
import sv2 from "../../public/images/service02.png"
import sv3 from "../../public/images/service03.png"
import sv4 from "../../public/images/service04.png"

import Link from 'next/link'
import Image from 'next/image'
import { useScroll, useTransform,motion } from 'framer-motion'
import gsap from 'gsap'
import MouseWrapper from '@/app/effects/hooks/MouseWrapper'


function Showcase() {
  return (
<div className='flex flex-col gap-[5vh] py-[150px]  bg-[#222222]'>
<Service/>
</div>
  )
}


const Service=()=>{
   const containerRef = useRef(null);
   const { scrollYProgress:scaleCard} = useScroll({
     target: containerRef,
     offset:['start start','end end']
   });


   const smallScreenImageRef = useRef(null);
   const { scrollYProgress:scaleSmallScreenImage} = useScroll({
     target: smallScreenImageRef,
   //   offset:['start end','end start']
     offset:['start end','start start']
   });
   const scaleSmallScreen = useTransform(scaleSmallScreenImage, [0, 1], [2, 1]);
//    useEffect(()=>{
// scaleCard.on('change',e=>console.log(scaleCard.current))
//    },[])
   // const scale = useTransform(scaleCard, [0, 1], [2, 1]);
   const scaleAnimation = {
          initial: {scale: 0, x:"-50%", y:"-50%"},
          enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
          closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
      }
      const cursor = useRef(null);
        const [modal, setModal] = useState({active: false, index: 0})
            const { active, index } = modal;
    return(
   //   <div onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className='relative container '>
       <div className={'relative container'}>
         
        <div className='flex gap-4  breaker' >
     <div className='breaker-child mt-5'>
     {cards.map(({title,title2,img,subimg1,subimg2,paragraph,id},index)=>{
   return <div  className='min-h-[100vh] my-4 mx-auto w-[95%] pt-10 flex gap-6 flex-col justify-start'>
   <h2 className='font-custom text-5xl max-w-[80%]'>
   {title}
   </h2>
   <h2 className=' mt-2 font-custom2 text-2xl  max-w-[80%]'>
   {title2}
   </h2>

   {/* hidden image on small screen */}
   <div  ref={smallScreenImageRef} class="relative h-[60vh] block lg:hidden  overflow-cli">
      <svg className="absolute z-40 -top-0 right-0 size-16 rotate-180 -scale-x-100" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9395 114C19.2774 114 24.3941 111.839 28.1518 107.999L108.202 26.1797C111.917 22.3833 114 17.2545 114 11.9096L114 1.35944e-06L114 114L0 114L13.9395 114Z" fill="#222222"></path></svg>
      <svg className="absolute z-40 bottom-0 left-0 size-8 rotate-90" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9395 114C19.2774 114 24.3941 111.839 28.1518 107.999L108.202 26.1797C111.917 22.3833 114 17.2545 114 11.9096L114 1.35944e-06L114 114L0 114L13.9395 114Z" fill="#222222"></path></svg>
  <div className='bg-blue- overflow-hidden  relatie h-full w-full'>
       <motion.div  style={{scale:scaleSmallScreen}} class=" relative h-full w-full">
        <img src={img} className='w-full object-cover h-full rounded-xl'/>
         </motion.div>
      </div>
         </div>
      <div class="flex gap-4 ">
      <div class="relative  overflow-clip">
      <svg className="absolute z-40 -top-0 right-0 size-16 rotate-180 -scale-x-100" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9395 114C19.2774 114 24.3941 111.839 28.1518 107.999L108.202 26.1797C111.917 22.3833 114 17.2545 114 11.9096L114 1.35944e-06L114 114L0 114L13.9395 114Z" fill="#222222"></path></svg>
      <svg className="absolute z-40 bottom-0 left-0 size-8 rotate-90" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9395 114C19.2774 114 24.3941 111.839 28.1518 107.999L108.202 26.1797C111.917 22.3833 114 17.2545 114 11.9096L114 1.35944e-06L114 114L0 114L13.9395 114Z" fill="#222222"></path></svg>
       <div class=" relative h-[100px] w-full" style={{filter: "blur(0px)"}}>
        <Image width={1175} height={765} src={img} className='w-full object-cover h-full rounded-xl'/>
         </div>
         </div>
         <div class="relative flex-1 overflow-clip">
      <svg className="absolute z-40 -top-0 right-0 size-16 rotate-180 -scale-x-100" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9395 114C19.2774 114 24.3941 111.839 28.1518 107.999L108.202 26.1797C111.917 22.3833 114 17.2545 114 11.9096L114 1.35944e-06L114 114L0 114L13.9395 114Z" fill="#222222"></path></svg>
      <svg className="absolute z-40 bottom-0 left-0 size-8 rotate-90" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9395 114C19.2774 114 24.3941 111.839 28.1518 107.999L108.202 26.1797C111.917 22.3833 114 17.2545 114 11.9096L114 1.35944e-06L114 114L0 114L13.9395 114Z" fill="#222222"></path></svg>
       <div class=" relative h-[100px] w-full" style={{filter: "blur(0px)"}}>
        <Image width={1175} height={765} src={img} className='w-full object-cover h-full rounded-xl'/>
         </div>
         </div>

       
   </div>
   <h2 className=' mt-2 font-custom2 text-2xl  max-w-[80%]'>
   {paragraph}
   </h2>
</div>
})}
     
         
         
     </div>
 {/* <div ref={containerRef} className='hidden lg:flex  mx-auto mt-5 pt-[30px] breaker-child h-330vh] relative'> */}
 
 {/* <div ref={containerRef} className='hidden lg:block  mx-auto mt-5 pt-[30px] breaker-child h-330vh] relative'> */}
<MouseWrapper className={'hidden lg:block  mx-auto mt-5 pt-[30px] breaker-child h-330vh] relative'} cursor={cursor} active={active} index={index} setModal={setModal} modal={modal}>
          <motion.div  className= 'font-custom2 uppercase text-para p-8 z-[9999] pointer-events-none text-neutral-800 bg-[#C9FD74] h-10 w-10 fixed top-0 rounded-full flex justify-center items-center' ref={cursor}  variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
            View
           </motion.div>
{cards.map((card,index)=>{
   const targetScale= 1-((cards.length - index) *0.05)
   return <Card {...card} key={index} i={index} progress={scaleCard} range={[index*0.25,1]} targetScale={targetScale}/>
})}
        {/* </div> */}
        </MouseWrapper>



        </div>

       </div>







   //  </div>
)
}
export default Showcase

function Card({i,url,img,title,targetScale,range,progress}) {
   const targetRef = useRef(null);
   const { scrollYProgress:scaleCardImage} = useScroll({
     target: targetRef,
     offset:['start end','start start']
   });
   const scale = useTransform(scaleCardImage, [0, 1], [2, 1]);

   const scaleCard = useTransform(progress, range, [1, targetScale]);
   return(   
   <motion.div ref={targetRef} style={{scale:scaleCard,top:`calc(4% + ${i*35}px)`}} className= ' my-4 mx-auto w-[90%] rounded-[20px] overflow-hidden noise h-[100vh] sticky top-[0px]'>
  <div className='bg-blue- overflow-hidden  relatie h-full w-full'>
   <motion.div style={{scale}} className=' h-full w-full !cursor-pointer'>
    {/* <img src={img} className='object-cover h-full w-full'/> */}
    <Link href={url} className='h-full w-full'>
    <img src={img} alt="Property" className="object-cover h-full w-full grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"/>
    </Link>
   </motion.div>
  </div>
     </motion.div>
   )
}

const cards= [
   {id:'1234',
      url:"/projects/house",
      title:'“I won, and I didn’t break any rules”',
      title2:'[ Théâtre D’opéra Spatial — Jason Allen ]',
      subimg1:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F27jRdyECt9ly6G8XGN3Mle%2F4190fbfec9eda3b19789be2187dc8182%2Fdetailshot3.webp&w=1200&q=75',
      subimg2:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F6oPw8VapcEAOqMIYoaKl02%2Fd8c87c6cf561a61eeee01b097e5971fd%2Fdetailshot4.webp&w=1920&q=75',
      paragraph:'The Copy Magazine features solely A.I. generated photorealistic images with fictional figures that have real names. The magazine explores the implications and biases of generative AI in the high-end fashion industry.',
      img:img1.src
   },{id:'123',
      url:"/projects/home",
      title:'The First A.I. Fashion Magazine',
      title2:'[ Copy magazine — Carl-Axel Wahlstrom ]',
      subimg1:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75',
      subimg2:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75',
      paragraph:'Jason Allen won first prize in the Colorado State Fair’s annual art competition with an AI generated artwork. The work has sparked controversy across the internet — leaving people argue on the topic of authenticity, and plagarism.',
      img:img1.src
   },
   {id:'123',
      url:"/projects/office",
      title:'World’s First A.I. Art Award',
      title2:'[ Twin Sisters in Love — Annika Nordenskiöld ]',
      subimg1:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75',
      subimg2:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75',
      paragraph:'Annika wins first prize at the worlds first AI photography festival, sparking debates about the authenticity and ethics of AI-generated images — especially within photography',
      img:img1.src
   },
     {id:'123',
      url:"/projects/others",
      title:'World’s First A.I. Art Award',
      title2:'[ Twin Sisters in Love — Annika Nordenskiöld ]',
      subimg1:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75',
      subimg2:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75',
      paragraph:'Annika wins first prize at the worlds first AI photography festival, sparking debates about the authenticity and ethics of AI-generated images — especially within photography',
      img:img1.src
   },
     {id:'123',
      url:"/projects/house-newer",
      title:'World’s First A.I. Art Award',
      title2:'[ Twin Sisters in Love — Annika Nordenskiöld ]',
      subimg1:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75',
      subimg2:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75',
      paragraph:'Annika wins first prize at the worlds first AI photography festival, sparking debates about the authenticity and ethics of AI-generated images — especially within photography',
      img:img1.src
   },

]

