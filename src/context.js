import React, { useState, useContext } from "react";
import { projects } from "./projects_data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const renderedProjects = 9;
  const [allProjects, setAllProjects] = useState(projects);
  const [amount, setAmount] = useState(renderedProjects);
  const [active, setActive] = useState("all");
  const allCategories = [
    "all",
    ...new Set(allProjects.map((category) => category.category)),
  ];
  const [categories, setCategories] = useState(allCategories);

  const searchProject = (id) => {
    return allProjects.filter((item) => item.id === parseInt(id));
  };

  const filterProjects = (category) => {
    if (category === "all") {
      setAllProjects(projects);
      setAmount(renderedProjects);
      return;
    }
    const newProjects = projects.filter((item) => item.category === category);
    setAllProjects(newProjects);
    setAmount(renderedProjects);
  };

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [addTouchEventListener, setTouchEventListener] = useState(false);

  function checkSize(w, h) {
    if (w <= 500 && h <= 920) {
      return true;
    } else {
      return false;
    }
  }

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  return (
    <AppContext.Provider
      value={{
        allProjects,
        setAllProjects,
        searchProject,
        categories,
        setCategories,
        filterProjects,
        amount,
        setAmount,
        active,
        setActive,
        projects,
        dimensions,
        setDimensions,
        debounce,
        addTouchEventListener,
        setTouchEventListener,
        checkSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
