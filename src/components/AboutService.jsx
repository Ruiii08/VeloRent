import React from 'react';
import safetyImage from '../assets/safetyImage.jpg';
import ecoImage from '../assets/ecoImage.jpg';
import coverageImage from '../assets/coverageImage.jpg';

const AboutService = () => {
  return (
    <div id="about" className='py-10 bg-white dark:bg-black dark:text-white min-h-screen flex flex-col justify-center'>
      <div className="container">
       
        <div className="pb-8">
          <h1 className='text-4xl font-semibold text-left font-serif sm:text-5xl'>
            Ride Better With Us
          </h1>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Safety */}
          <div className="relative overflow-hidden rounded-xl h-[400px]">
            <img 
              src={safetyImage} 
              alt="Safety first bike rental" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className='text-2xl font-semibold font-serif text-white'>
                Safety First
              </h3>
              <p className="text-white mt-2 text-base">
                Daily inspected bikes with premium safety gear included
              </p>
            </div>
          </div>

          {/* Eco-Friendly */}
          <div className="relative overflow-hidden rounded-xl h-[400px]">
            <img 
              src={ecoImage} 
              alt="Eco-friendly bike rental" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className='text-2xl font-semibold font-serif text-white'>
                Eco-Friendly
              </h3>
              <p className="text-white mt-2 text-base">
                Carbon-neutral rides with tree planting initiative
              </p>
            </div>
          </div>

          {/* Coverage */}
          <div className="relative overflow-hidden rounded-xl h-[400px]">
            <img 
              src={coverageImage} 
              alt="Wide coverage bike rental" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className='text-2xl font-semibold font-serif text-white'>
                City-Wide
              </h3>
              <p className="text-white mt-2 text-base">
                Available at 100+ locations across the city
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="text-lg dark:text-gray-300">
            Our bike rental service combines safety, sustainability, and convenience to give you 
            the best urban mobility experience. Whether you're commuting or exploring, 
            we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
