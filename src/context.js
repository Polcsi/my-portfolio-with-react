import React, { useState, useContext } from "react";
import { projects } from "./projects_data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allProjects, setAllProjects] = useState(projects);
  return (
    <AppContext.Provider value={{ allProjects, setAllProjects }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
