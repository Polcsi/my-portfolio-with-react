import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import "../css/project.css";
import Navbar from "../components/Navbar";

const Project = () => {
  const { searchProject } = useGlobalContext();
  const urlParam = useParams();
  const { title, cover, url, date, info } = searchProject(urlParam.id)[0];

  return (
    <section className="section project-page">
      <Navbar
        links={[
          { title: "home", type: "route", url: "/" },
          { title: "projects", type: "route", url: "/projects" },
          { title: "contact", type: "route", url: "/contact" },
        ]}
      />
      <div className="project-page-container">
        <div className="section-header">
          <h2>project page</h2>
          <h1>{title}</h1>
        </div>
        <div className="image-banner">
          <img src={cover} alt="banner" />
        </div>
        <div className="project-info-section">
          <div className="grid-info">
            <h1>details about project</h1>
            <p>{info}</p>
            <span>{date}</span>
          </div>
          {url !== "" ? (
            <a href={url} target="_blank" rel="noreferrer">
              view project page
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
