import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import FeaturedProjects from "../components/FeaturedProjects";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar
        links={[
          { title: "home", type: "scroll" },
          { title: "about", type: "scroll" },
          { title: "skills", type: "scroll" },
          { title: "services", type: "scroll" },
          { title: "pricing", type: "scroll" },
          { title: "projects", type: "scroll" },
          { title: "contact", type: "route", url: "/contact" },
        ]}
      />
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
