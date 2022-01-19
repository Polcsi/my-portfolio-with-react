import React, { useState, useContext } from "react";
import { projects } from "./projects_data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allProjects, setAllProjects] = useState(projects);

  const searchProject = (id) => {
    return allProjects.filter((item) => item.id === parseInt(id));
  };

  return (
    <AppContext.Provider value={{ allProjects, setAllProjects, searchProject }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
