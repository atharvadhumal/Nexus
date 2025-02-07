import React from 'react'
import heroimg from '../assets/images/heroimg2.png'



const Hero = () => {
  return (
    <section>
<div className='relative'>
<div>
    <img src={heroimg} className='w-full bg-no-repeat bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-xl overflow-hidden' alt="Construction Site" />
</div>
    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h1
            className="mt-20 sm:mt-24 md:mt-32 lg:mt-38 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-wide">
            NEXUS
          </h1> 
          <p className="my-2 sm:my-4 text-base sm:text-2xl md:text-3xl text-white">
            Your Partner in Precision and Innovation
          </p>
        

          
            
        </div>
    </div>
</div>

    </section>
  )
}                                                                       

export default Hero