import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import FeaturedProjects from "../components/FeaturedProjects";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Pricing />
      <FeaturedProjects />
    </>
  );
};

export default Home;
