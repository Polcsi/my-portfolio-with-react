import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";

const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section section" name="projects">
      <div className="section-container featured-projects-section-grid">
        {" "}
        <div className="featured-projects-header">
          <h1>featured projects</h1>
          <p>
            this section you can view couple of projects i have ever done.
            enjoy!
          </p>
        </div>
        <div className="view-all-btn-container">
          <Link to="/projects" className="btn  primary-green-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            view all
          </Link>
        </div>
        <div className="featured-project-list">
          <ProjectList amount={6} filter={false} />
        </div>
        <div className="work-together-card">
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
        </div>
      </div>
      <div className="dark-background"></div>
    </section>
  );
};

export default FeaturedProjects;
