import { useEffect } from "react";
import { useGlobalContext } from "./context";

export const useResize = () => {
  const {
    debounce,
    dimensions,
    setDimensions,
    setTouchEventListener,
    checkSize,
  } = useGlobalContext();
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (checkSize(dimensions.width, dimensions.height)) {
        setTouchEventListener(true);
      } else {
        setTouchEventListener(false);
      }
    });
    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
};
