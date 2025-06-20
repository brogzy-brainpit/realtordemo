import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import CountUp from 'react-countup';


function OurNumbers() {
  return (
    <div className='w-full px-4 py-[10vh] breaker container mx-auto '>
<div className=' breaker-child flex flex-3 font-custom text-footer pb-6'>
  Our Numbers Do the Talking for Us
</div>

     <div className='breaker-child flex-1'>
       <div className='breaker flex flex-col  w-full bged-400 justify-center items-center gap-0' >
<div className='breaker-chil flex w-full justify-betwee'>
  <div className='bg-green-30 p-2 border  border-b-0 border-gray-700 flex justify-center items-center flex-col flex-1'>
 <h2 className='font-custom text-heading'>
 <CountUp end={541} decimals={0} suffix="+" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal'>Satisfied Clients</p>
</div>
<div className='bg-green-30 p-2 border border-b-0 border-l-0 border-gray-700 flex justify-center items-center flex-col'>
<h2 className='font-custom text-heading'>
 <CountUp end={35} decimals={0} suffix="M +" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal'>Revenue generated</p>
</div>
</div>


<div className='breaker-chil flex w-full justify-between'>
  <div className='bg-green-30 p-2 border border-r-0 border-gray-700 flex justify-center items-center flex-col'>
 <h2 className='font-custom text-heading'>
 <CountUp end={35} decimals={0} suffix="%" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal'>Conversion Rate</p>
</div>
<div className='bg-green-30 p-2 border border-gray-700 flex justify-center items-center flex-col flex-1'>
<h2 className='font-custom text-heading'>
 <CountUp end={390}  suffix="" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal'>Reviews Rated</p>
</div>
</div>
      </div>

     </div>

    </div>
  )
}

export default OurNumbers