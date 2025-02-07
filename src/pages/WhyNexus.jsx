import React from 'react'
import whyNexus from '../assets/images/vision1.jpg'


const WhyNexus = () => {
  return (
  <section>
    <div className='relative'>
    <div>
        <img src={whyNexus} className='w-full bg-no-repeat bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-xl overflow-hidden' alt="Construction Site" />
    </div>
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
  
            <div className="text-center">
              <h1
                className="mt-20 sm:mt-24 md:mt-32 lg:mt-38 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide">
                WHY US
              </h1> 
              <p className="my-2 sm:my-4 text-base sm:text-xl md:text-2xl text-white 
                    max-w-2xl mx-auto 
                    line-clamp-3">
              Choose Nexus Engineering for reliable, innovative, and industry-leading design engineering solutions tailored to your project needs.   
              </p>
            </div>
        </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-14">
        {/* First Section */}
        <div className="mb-4 mt-2">
          <h2 className="text-3xl font-bold mb-6">
            Specialized Expertise Across Industries
          </h2>
          <p className="text-lg leading-relaxed">
            With years of experience in oil & gas, chemical, semiconductor, and 
            process plant design, Nexus Engineering combines deep industry insight 
            with technical expertise. Our solutions are tailored to meet the unique 
            needs of each sector, ensuring optimal performance and reliability.
          </p>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Second Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Innovative, Client-Centric Approach
          </h2>
          <p className="text-lg leading-relaxed">
            At Nexus, we prioritize client collaboration and customization. We 
            partner with you to design solutions that align perfectly with your 
            goals, leveraging the latest technology and methodologies to drive 
            innovative and efficient outcomes.
          </p>
        </div>

        <hr className="border-gray-200 mt-8" />

        {/* third Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
          Quality, Compliance, and Safety
          </h2>
          <p className="text-lg leading-relaxed">
          We adhere to the highest standards of quality and strictly follow industry regulations, ensuring that every project we undertake is safe, compliant, and aligned with regulatory requirements, protecting your business and ensuring peace of mind.
          </p>
        </div>

        <hr className="border-gray-200 mt-8" />


        {/* fourth Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
          End-to-End Project Support
          </h2>
          <p className="text-lg leading-relaxed">
          Nexus Engineering provides seamless support throughout the entire project lifecycle—from concept to completion. Our team works closely with you through every phase, offering detailed consultation, design, and engineering services to bring your vision to life.
          </p>
        </div>

        <hr className="border-gray-200 mt-8" />


        {/* fifthSection */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
          Dedicated and Experienced Team
          </h2>
          <p className="text-lg leading-relaxed">
          Our team of skilled design engineers is committed to excellence, delivering projects on time and within budget. With a dedication to precision and client satisfaction, we focus on creating value and building long-term relationships.


          </p>
        </div>

        <hr className="border-gray-200 mt-8" />

        


      </div>
    </div>



  </section>



  )
}

export default WhyNexus