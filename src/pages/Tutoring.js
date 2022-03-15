import React from "react";
import Navbar from "../components/Navbar";
import { InitialTransition, content } from "../pageTransition";
import { motion } from "framer-motion";

const Tutoring = () => {
  return (
    <>
      <InitialTransition />
      <motion.section
        initial="initial"
        animate="animate"
        variants={content}
        className="section"
      >
        <Navbar
          links={[
            { title: "home", type: "route", url: "/", active: false },
            {
              title: "projects",
              type: "route",
              url: "/projects",
            },
            {
              title: "tutoring",
              type: "route",
              url: "/tutoring",
              active: true,
            },
            { title: "contact", type: "route", url: "/contact", active: false },
          ]}
        />
      </motion.section>
    </>
  );
};

export default Tutoring;
