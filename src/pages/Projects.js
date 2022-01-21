import React from "react";
import { useGlobalContext } from "../context";
import "../css/projects.css";
import ProjectList from "../components/ProjectList";
import Navbar from "../components/Navbar";

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
    <section className="projects-page">
      <Navbar
        links={[
          { title: "home", type: "route", url: "/", active: false },
          { title: "projects", type: "route", url: "/projects", active: true },
          { title: "contact", type: "route", url: "/contact", active: false },
        ]}
      />
      <div className="projects-page-header">
        <div className="projects-page-header-title">
          <h1>all projects</h1>
          <p>
            This page you can view all of my projects and ideas i have ever
            done.
          </p>
        </div>
        <div className="categories">
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
        </div>
      </div>
      <div className="featured-project-list">
        <ProjectList amount={amount} filter={true} />
      </div>
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

      <div className="triangle-object"></div>
    </section>
  );
};

export default Projects;
