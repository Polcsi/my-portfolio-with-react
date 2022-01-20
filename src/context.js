import React, { useState, useContext } from "react";
import { projects } from "./projects_data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allProjects, setAllProjects] = useState(projects);
  const [amount, setAmount] = useState(9);
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
      setAmount(9);
      return;
    }
    const newProjects = projects.filter((item) => item.category === category);
    setAllProjects(newProjects);
    setAmount(newProjects.length);
  };

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
