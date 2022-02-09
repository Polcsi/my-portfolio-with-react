import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";
import { motion } from "framer-motion";
import {
  revealSectionPreTitle,
  revealSectionTitle,
  revealCard,
} from "./ScrollTriggeredAnimations";

const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section section" name="projects">
      <div className="section-container featured-projects-section-grid">
        {" "}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          className="featured-projects-header"
        >
          <motion.h1 variants={revealSectionPreTitle}>
            featured projects
          </motion.h1>
          <motion.p variants={revealSectionTitle}>
            this section you can view couple of projects i have ever done.
            enjoy!
          </motion.p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={revealSectionPreTitle}
          className="view-all-btn-container"
        >
          <Link to="/projects" className="btn  primary-green-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            view all
          </Link>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealSectionPreTitle}
          className="featured-project-list"
        >
          <ProjectList amount={6} filter={false} />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealCard}
          className="work-together-card"
        >
          <h1>let's work together on your next project</h1>
          <p className="work-together-card-txt">
            I trully would be happy if I could create a website with you. If you
            want to just order a website choose a plan in the pricing section
            and write a message in the contact page. Write the plan name in the
            message and we will discuss everything about it.
          </p>
          <Link
            className="btn white-border-btn work-together-card-btn"
            to="/contact"
          >
            contact
          </Link>
        </motion.div>
      </div>
      <div className="dark-background"></div>
    </section>
  );
};

export default FeaturedProjects;
