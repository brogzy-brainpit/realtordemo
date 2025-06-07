'use client';
import { useEffect, useState } from 'react';
import Lenis from 'lenis'
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Section from '@/components/Section';
import Landing from '@/components/Landing';
import Section2 from '@/components/Section2';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Services from '@/components/Services';
import OutroImage from '@/components/OutroImage';
import Footer from '@/components/Footer';
import OurNumbers from '@/components/OurNumbers';
export default function Home() {
 const [isLoading,setIsLoading]=useState(true)

  // useEffect(()=>{

  //   setTimeout(() => {
  //     setIsLoading(false)
  //   document.body.style.cursor="default"
  //   window.scrollTo({top:0})
  //   }, 2000);
  // },[])
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      {/* <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
    </AnimatePresence> */}
    <Header/>
      <Landing />
      <OurNumbers/>
      <Section2 />
      {/* <Intro /> */}
      <Services/>
      <Description />
      <OutroImage/>
      <Footer/>
      {/* <Section /> */}
    </main>
  );
}