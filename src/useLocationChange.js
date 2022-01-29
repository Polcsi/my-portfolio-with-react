import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "./context";

export const useLocationChange = () => {
  const { setIsFirstMount } = useGlobalContext();
  const location = useLocation();
  useEffect(() => {
    setIsFirstMount(true);
  }, [location, setIsFirstMount]);
};
