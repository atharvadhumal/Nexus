import React from 'react'
import handshake from '../assets/images/handshake.jpg'

const ContactPage = () => {
  return ( 
  <>
 <section>
        <div className='relative'>
          <div>
            <img 
              src={handshake} 
              className='w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-xl' 
              alt="Construction Site" 
            />
          </div>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide">
                CONTACT US
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <hr className="border-white my-4 sm:my-6 w-full" />
        <h2 className='text-base sm:text-lg md:text-xl text-white leading-relaxed w-full'>
          Get in touch with Nexus Engineering for expert design engineering solutions tailored to your industry needs. Our team is ready to assist with inquiries, consultations, or project support.
        </h2>
        <hr className="border-white my-4 sm:my-6 w-full" />

<div className='p-10'>
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-md mx-auto shadow-lg">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">CONTACT US</h2>
    <div className="space-y-4">
      <h3 className="text-lg md:text-xl text-white">Phone: Your number</h3>
      <h3 className="text-lg md:text-xl text-white">Email: Your email</h3>
      <p className="text-white/80 text-base md:text-lg mt-6 text-center italic">
        We look forward to connecting with you!
      </p>
    </div>
  </div>
  </div>
        

      </div>
  </>
  )
}

export default ContactPage