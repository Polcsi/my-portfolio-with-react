import React from "react";
import { useGlobalContext } from "../context";
import "../css/projects.css";
import ProjectList from "../components/ProjectList";
import Navbar from "../components/Navbar";
import {
  InitialTransition,
  title,
  content,
  main,
  secondaryTitle,
} from "../pageTransition";
import { motion } from "framer-motion";

const Projects = () => {
  const {
    allProjects,
    categories,
    filterProjects,
    amount,
    setAmount,
    active,
    setActive,
  } = useGlobalContext();

  return (
    <>
      {InitialTransition()}
      <motion.section
        initial="initial"
        animate="animate"
        variants={content}
        className="projects-page"
      >
        <Navbar
          links={[
            { title: "home", type: "route", url: "/", active: false },
            {
              title: "projects",
              type: "route",
              url: "/projects",
              active: true,
            },
            { title: "contact", type: "route", url: "/contact", active: false },
          ]}
        />
        <div className="projects-page-container">
          <div className="projects-page-header">
            <motion.div variants={title} className="projects-page-header-title">
              <h1>all projects</h1>
              <p>
                This page you can view all of my projects and ideas i have ever
                done.
              </p>
            </motion.div>
            <motion.div variants={secondaryTitle} className="categories">
              {categories.map((category, index) => {
                return (
                  <button
                    className={
                      active === category
                        ? "category-btn active-category"
                        : "category-btn"
                    }
                    key={index}
                    onClick={() => {
                      filterProjects(category);
                      setActive(category);
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </motion.div>
          </div>
          <motion.div variants={main} className="featured-project-list">
            <ProjectList amount={amount} filter={true} />
          </motion.div>
          <div className="load-more-container">
            {" "}
            <button
              className={
                allProjects.length <= amount
                  ? "btn white-border-btn load-more-project hide"
                  : "btn white-border-btn load-more-project"
              }
              onClick={() => setAmount(amount + 3)}
            >
              load more
            </button>
            <button
              className={
                allProjects.length >= amount
                  ? "btn white-border-btn load-more-project hide"
                  : "btn white-border-btn load-more-project"
              }
              onClick={() => setAmount(amount - 3)}
            >
              load less
            </button>
          </div>
        </div>

        <div className="triangle-object"></div>
      </motion.section>
    </>
  );
};

export default Projects;
