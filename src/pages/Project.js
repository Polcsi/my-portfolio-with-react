import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  InitialTransition,
  title as transitionTitle,
  content,
  main,
  secondaryTitle,
} from "../pageTransition";
import { motion } from "framer-motion";
import "../css/project.css";
import Navbar from "../components/Navbar";
import { useLocationChange } from "../useLocationChange";

const Project = () => {
  useLocationChange();

  const { searchProject } = useGlobalContext();
  const urlParam = useParams();
  const { title, cover, url, date, info } = searchProject(urlParam.id)[0];

  return (
    <>
      <InitialTransition />
      <motion.section
        initial="initial"
        animate="animate"
        variants={content}
        className="section project-page"
      >
        <Navbar
          links={[
            { title: "home", type: "route", url: "/" },
            { title: "projects", type: "route", url: "/projects" },
            { title: "contact", type: "route", url: "/contact" },
          ]}
        />
        <div className="project-page-container">
          <div className="section-header">
            <motion.h2 variants={transitionTitle}>project page</motion.h2>
            <motion.h1 variants={secondaryTitle}>{title}</motion.h1>
          </div>
          <motion.div variants={main} className="image-banner">
            <img src={cover} alt="banner" />
          </motion.div>
          <motion.div variants={main} className="project-info-section">
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
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Project;
