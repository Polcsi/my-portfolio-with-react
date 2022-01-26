import React, { useRef } from "react";
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

const Projects = () => {
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
          categoriesRef.current.style.left = "15px";
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
            <motion.div
              className="categories-container"
              variants={secondaryTitle}
              onMouseDown={onPointerEvent}
              onTouchStart={onPointerEvent}
            >
              <div className="fade-left"></div>
              <div className="fade-right"></div>
              <div className="categories" ref={categoriesRef}>
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
