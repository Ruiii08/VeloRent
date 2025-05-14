import React from "react";
import rentalImage from "../assets/rental.jpg";

const Hero = ({ theme }) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 relative z-20">
      <div className="container min-h-[620px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-8">
          {" "}
          {/* Added gap-8 */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2 flex items-center justify-center h-full py-6" // Increased to py-6
          >
            <img
              src={rentalImage}
              alt="picture of a rental vehicle"
              className="relative -z-10 max-h-[540px] w-full max-w-[600px] object-cover rounded-lg drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              // Changed to w-full and added max-w, object-cover, and rounded-lg
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-20">
            {" "}
            {/* Reduced pr-32 to pr-20 */}
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Bike Rental
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Feel the freedom. Ride your way. Adventure made easy.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("vehicle")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              data-aos="fade-up"
              data-aos-duration="2500"
              className="bg-transparent text-[#FF3D3D] border-2 border-[#FF3D3D] py-2 px-6 rounded 
             hover:bg-[#FF3D3D] hover:text-white transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
