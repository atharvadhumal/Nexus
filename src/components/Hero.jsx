import React from 'react'
import heroimg from '../assets/images/nexusheroimig.jpg'
import logo from '../assets/images/nexusLogo.png';

const Hero = () => {
  return (
    <section>
      <div className='relative'>
        <div>
          <img 
            src={heroimg} 
            className='w-full bg-no-repeat bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-xl overflow-hidden' 
            alt="Construction Site" 
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center -translate-y-8">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <img 
                  src={logo} 
                  alt="Nexus Logo" 
                  className="h-[2.5rem] sm:h-[3.5rem] md:h-[4.5rem] lg:h-[5.5rem] w-auto"
                />
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-wide">
                  NEXUS
                </h1> 
              </div>
              <p className="text-sm sm:text-2xl md:text-3xl text-white mt-1 translate-x-4 sm:translate-x-5">
                Your Vision, Our Design.
              </p>
            </div>
          </div>
        </div>                              
      </div>
    </section>
  )
}

export default Hero