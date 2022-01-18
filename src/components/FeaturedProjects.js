import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";

const FeaturedProjects = () => {
  return (
    <section
      className="featured-projects-section section"
      name="featured-projects"
    >
      <div className="featured-projects-header">
        <h1>featured projects</h1>
        <p>
          this section you can view couple of projects i have ever done. enjoy!
        </p>
      </div>
      <div className="view-all-btn-container">
        <Link to="/projects" className="btn view-all-btn">
          view all
        </Link>
      </div>
      <div className="featured-project-list">
        <ProjectList amount={6} />
      </div>
      <div className="work-together-card">
        <h1>let's work together on your next project</h1>
        <p></p>
        <Link className="btn" to="/contact">
          contact
        </Link>
      </div>
      <div className="dark-background"></div>
    </section>
  );
};

export default FeaturedProjects;
