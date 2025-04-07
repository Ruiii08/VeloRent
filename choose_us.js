import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "We offer the most competitive pricing with no hidden charges.",
    details: "Our pricing model ensures transparency and affordability for all customers.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "Speedy and secure service is our top priority.",
    details: "We use cutting-edge technology to ensure fast and reliable service without compromising safety.",
    aosDelay: "500",
  },
  {
    name: "Experienced Drivers",
    icon: <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "#",
    description: "Our team consists of highly trained and experienced professionals.",
    details: "All our drivers undergo rigorous training and background checks to guarantee a safe journey.",
    aosDelay: "1000",
  },
];

const ChooseUs = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set animation duration (optional)
  }, []);

  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay} // Delay applied here
              className="card text-center group space-y-3 sm:space-y-6 p-6 sm:py-16 bg-gray-900 hover:bg-primary duration-300 text-zinc-50 hover:text-black rounded-lg shadow-lg"
            >
              <div className="grid place-items-center">{skill.icon}</div>
              <h1 className="text-xl font-bold">{skill.name}</h1>
              <p className="text-sm">{skill.description}</p>
              <p className="text-xs text-gray-400 group-hover:text-gray-700">{skill.details}</p>
              <a
                href={skill.link}
                className="text-primary font-medium hover:underline transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
