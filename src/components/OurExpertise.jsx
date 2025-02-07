import React from 'react';

const OurExpertise = () => {
  return (
    <div className="w-full py-20 sm:py-10 md:py-16 lg:py-22">
      <h1 className="text-center text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
        Our Expertise
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Process Plant Design</h3>
          <p className="text-gray-800 text-base leading-relaxed">
            We specialize in the design and optimization of industrial plants, ensuring operational efficiency, safety, and sustainability.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Oil & Gas Solutions</h3>
          <p className="text-gray-800 text-base leading-relaxed">
            From upstream to downstream, our engineering services cover the entire oil & gas lifecycle, including project management, facility design, and risk assessment.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Chemical Engineering</h3>
          <p className="text-gray-800 text-base leading-relaxed">
            Delivering high-performance chemical plant designs that optimize processes, increase productivity, and reduce environmental impact.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Semiconductor Design</h3>
          <p className="text-gray-800 text-base leading-relaxed">
            Providing advanced design services for the semiconductor industry, including cleanroom design and process automation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;