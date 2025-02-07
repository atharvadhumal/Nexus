import React from 'react';
import plan from '../assets/images/plan.jpg';
import servicesData from '../services.json';

const ServicePage = () => {
  return (
    <>
      <section>
              <div className='relative'>
                <div>
                  <img 
                    src={plan} 
                    className='w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-xl' 
                    alt="Construction Site" 
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide">
                      SERVICES
                    </h1>
                  </div>
                </div>
              </div>
            </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6">
          Our Detailed Engineering Design Services
        </h2>
        <hr className="border-white my-4 sm:my-6" />
        <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
          At Nexus Engineering, we provide comprehensive detailed engineering design services for industrial sectors, including oil & gas, petrochemicals, power generation, and process plants. Our expert team ensures your project progresses smoothly from conceptual design to construction, delivering reliable, cost-effective, and optimized solutions that meet the highest industry standards.
        </p>
        <hr className="border-white my-4 sm:my-6" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {servicesData.services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-105">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {service.content}
                </p>
                {service.features && (
                  <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-xs sm:text-sm text-gray-600"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    <div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <hr className="border-white my-4 sm:my-6 w-full" />
        <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed w-full">
          At Nexus Engineering, we provide comprehensive detailed engineering design services for industrial sectors, including oil & gas, petrochemicals, power generation, and process plants. Our expert team ensures your project progresses smoothly from conceptual design to construction, delivering reliable, cost-effective, and optimized solutions that meet the highest industry standards.
        </p>
        <hr className="border-white my-4 sm:my-6" />
      </div>
    </div>
    </>
  );
};

export default ServicePage;