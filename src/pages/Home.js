import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import FeaturedProjects from "../components/FeaturedProjects";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Navbar
        links={[
          { title: "home", type: "scroll", active: false },
          { title: "about", type: "scroll", active: false },
          { title: "skills", type: "scroll", active: false },
          { title: "services", type: "scroll", active: false },
          { title: "pricing", type: "scroll", active: false },
          { title: "projects", type: "scroll", active: false },
          { title: "contact", type: "route", url: "/contact", active: false },
        ]}
      />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Pricing />
      <FeaturedProjects />
      <Contact />
    </>
  );
};

export default Home;
