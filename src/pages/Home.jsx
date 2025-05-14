import React from "react";
import Hero from "../components/Hero";
import ChooseVehicles from "../components/ChooseVehicles";
import AboutService from "../components/AboutService";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <Hero theme={theme} />
      <ChooseVehicles theme={theme} setTheme={setTheme} />
      <AboutService />
      <Services />
      <Footer theme={theme} setTheme={setTheme} />
    </>
  );
};

export default Home;
