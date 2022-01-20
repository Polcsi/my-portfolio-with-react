import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaArrowRight } from "react-icons/fa";

const ProjectList = ({ amount, filter }) => {
  const { allProjects, projects } = useGlobalContext();

  return (filter ? allProjects : projects).slice(0, amount).map((project) => {
    const { id, title, cover } = project;
    return (
      <article key={id}>
        <div className="project-header">
          <img src={cover} alt={`${title}`} />
        </div>
        <div className="project-body">
          <h1>{title}</h1>
          <Link to={`/projects/project/${id}`}>
            know more <FaArrowRight />
          </Link>
        </div>
      </article>
    );
  });
};

export default ProjectList;
