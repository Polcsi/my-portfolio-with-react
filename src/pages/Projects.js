import React, { useState, useEffect, useRef } from "react";
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
import { useResize } from "../useResize";
import { useLocationChange } from "../useLocationChange";

const Projects = () => {
  useLocationChange();
  const {
    allProjects,
    categories,
    filterProjects,
    amount,
    setAmount,
    active,
    setActive,
    dimensions,
    addTouchEventListener,
    checkSize,
  } = useGlobalContext();

  const categoriesRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useResize();

  const onPointerEvent = (e) => {
    if (
      addTouchEventListener ||
      checkSize(dimensions.width, dimensions.height)
    ) {
      let isTouchEvent = e.type === "touchstart" ? true : false;
      let offset = 0;
      let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;

      if (isTouchEvent) {
        document.ontouchmove = onPointerMove;
        document.ontouchend = onPointerEnd;
      } else {
        document.onmousemove = onPointerMove;
        document.onmouseup = onPointerEnd;
      }

      function onPointerMove(e) {
        let categoriesWidth =
          categoriesRef.current.getBoundingClientRect().width;
        let categoriesEnd = -(categoriesWidth / (categories.length / 2));

        offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;

        if (offset >= 25) {
          categoriesRef.current.style.left = "30px";
        } else if (offset <= categoriesEnd) {
          categoriesRef.current.style.left = `${categoriesEnd}px`;
        } else {
          categoriesRef.current.style.left = offset + "px";
        }
      }

      function onPointerEnd() {
        if (isTouchEvent) {
          document.ontouchmove = null;
          document.ontouchend = null;
        } else {
          document.onmousemove = null;
          document.onmouseup = null;
        }
      }
    } else {
      return;
    }
  };

  function delayLoading(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(setLoading(false));
      }, ms);
    });
  }

  async function loadProjects() {
    await delayLoading(1000);
    setAmount(amount + 3);
  }

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      if (amount >= allProjects.length) {
        return;
      }
      setLoading(true);
      loadProjects();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  });

  return (
    <>
      <InitialTransition />
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
            <motion.div
              className="categories-container"
              variants={secondaryTitle}
              onMouseDown={onPointerEvent}
              onTouchStart={onPointerEvent}
            >
              <div className="fade-left"></div>
              <div className="fade-right"></div>
              <div className="categories disable-select" ref={categoriesRef}>
                {categories.map((category, index) => {
                  return (
                    <button
                      className={
                        active === category
                          ? "category-btn active-category"
                          : "category-btn"
                      }
                      disabled={active === category ? "disabled" : ""}
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
            </motion.div>
          </div>
          <motion.div variants={main} className="featured-project-list">
            <ProjectList amount={amount} filter={true} />
          </motion.div>
          {loading && (
            <div className="project-loader">
              <div className="mosaic-loader">
                <div className="cell d-1"></div>
                <div className="cell d-2"></div>
                <div className="cell d-4"></div>
                <div className="cell d-2"></div>
                <div className="cell d-3"></div>
                <div className="cell d-5"></div>
                <div className="cell d-3"></div>
                <div className="cell d-4"></div>
                <div className="cell d-5"></div>
              </div>
            </div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
