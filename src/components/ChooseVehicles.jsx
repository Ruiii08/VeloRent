import React from 'react';
import scootybg from "../assets/scootybg.png";
import bike1bg from "../assets/bike1bg.png";
import bike3bg from "../assets/bike3bg.png";
import { useNavigate } from 'react-router-dom';

const ChooseVehiclesData = [
    {
        name: "VeloScoot",
        price: 150,
        image: scootybg, 
        details: [
            "Type: Classic Scooter",
            "Ideal For: City commutes",
            "Add-ons: Helmet included",
            "Extra km charge: ₹3/km",
            "Security Deposit: ₹250"
        ]
    },
    {
        name: "VeloRide",
        price: 200,
        image: bike1bg,
        details: [
            "Type: Standard Bike",
            "Ideal For: Everyday rides",
            "Add-ons: Helmet included",
            "Extra km charge: ₹3/km",
            "Security Deposit: ₹300"
        ]
    },
    {
        name: "VeloPro",
        price: 300,
        image: bike3bg,
        details: [
            "Type: Premium Sports Bike",
            "Ideal For: Long rides, thrill seeking",
            "Add-ons: Helmet + Phone mount included",
            "Extra km charge: ₹3/km",
            "Security Deposit: ₹500"
        ]
    },
]

const ChooseVehicles = () => {
  const navigate = useNavigate(); // ✅

  const handleRideClick = () => {
    navigate('/booking'); // 👈 Replace with your actual route or logic
  };
    return (
      <div id="choose-ride" className='py-10 bg-white dark:bg-black dark:text-white min-h-screen flex flex-col justify-center overflow-x-hidden'>
        <div className='container'>

          <div className="pb-8">
            <h1 className='text-4xl font-semibold text-left font-serif sm:text-5xl'>
              Choose your ride
            </h1>
            <div id="vehicle" className="w-20 h-1 bg-primary mt-4"></div>
          </div>
          
          <p className='text-lg pb-10 dark:text-gray-300'>
            Have a look at our selection and choose the one that best fits your needs!
          </p>
          
          {/* Vehicle cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
            {ChooseVehiclesData.map((data, index) => (
              <div
                key={index}
                className="h-full border-2 border-gray-300 hover:border-[#FF3D3D] p-6 rounded-xl relative group overflow-visible z-10
                bg-white dark:bg-dark hover:bg-primary/10 dark:hover:bg-primary/10 duration-300"
              >
                <div className='w-full h-[200px] flex justify-center items-center mb-6'>
                  <img 
                    className={`w-full max-h-full object-contain ${
                      index === 0 
                        ? 'sm:translate-x-0 group-hover:-translate-x-8' 
                        : 'sm:translate-x-0 group-hover:translate-x-8'
                    } duration-700`}
                    src={data.image}
                    alt="" 
                  />
                </div>
                
                <div className='space-y-4'>
                  <h1 className='text-[#FF1B1B] text-xl'>{data.name}</h1>
                  <div className='flex justify-between items-center relative'>
                    <p className='text-xl'>₹{data.price}/Day</p>
                    <div className='relative group/details'>
                      <span className='text-base hover:text-[#FF6060] dark:hover:text-[#FF9090] cursor-pointer'>Details</span>
                      <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-white dark:bg-zinc-900 text-sm shadow-xl rounded-lg opacity-0 group-hover/details:opacity-100 transition-opacity duration-300 z-50 max-h-48 overflow-auto'>
                        <ul className='space-y-1 z-10 relative'>
                          {data.details.map((detail, idx) => (
                            <li key={idx} className='text-gray-700 dark:text-gray-300'>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Button */}
          <div className="flex justify-center mt-8">
            <button onClick={handleRideClick} className="
              bg-transparent
              hover:bg-[#FF3D3D]
              text-[#FF3D3D]
              hover:text-white
              font-medium
              py-2 px-7
              rounded-[.375rem]
              border-2
              border-[#FF3D3D]
              tracking-wide
              text-lg 
              transition-colors duration-500"
            >
              Let's Ride
            </button>
          </div>
        </div>
      </div>
    );
};
  
export default ChooseVehicles;
