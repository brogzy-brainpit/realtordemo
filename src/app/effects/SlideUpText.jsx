import { useInView,motion } from 'framer-motion'
import React, { useRef } from 'react'

function SlideUpText({children,text,margin='0px',once=false,duration=3.1,delay=3,center='justify-center',gap='10px',y="0%",...props}) {
    const textRef3= useRef(null)
    const inView= useInView(textRef3,{once,margin})
    const slideUp={
      initial:{y:"100%"},
  enter:(index)=>({y,transition:{duration,delay:delay*index}}),
  exit:{y:"100%"}}

  return (
    <p ref={textRef3} style={{columnGap:gap}} className={`t-center m-0 flex-wrap gap-y-0 flex ${center=='center'?'justify-center':center} items-center bg-slate50`}>
        {text.split(" ").map((p,index)=>{
        return <span {...props} key={index} >
            <motion.span custom={index} variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className='text-center bg-blac'>{p}</motion.span >
        </span>
    })}
    </p>
  )
}

export default SlideUpText