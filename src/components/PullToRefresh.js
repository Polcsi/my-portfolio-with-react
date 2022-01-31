import React, { useRef, useEffect, useState } from "react";

const PullToRefresh = () => {
  const loadingContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const pStart = { x: 0, y: 0 };
    const pCurrent = { x: 0, y: 0 };
    const main = loadingContainerRef.current;

    function loading() {
      console.log("Refresh");
      setIsLoading(true);
      document.body.classList.add("overflow-hidden");
      main.style.transform = `translateY(0px)`;
      setTimeout(() => {
        main.style.transform = `translateY(-100px)`;
        setIsLoading(false);
        document.body.classList.remove("overflow-hidden");
        window.location.reload();
      }, 2000);
    }

    function swipeStart(e) {
      if (typeof e["targetTouches"] !== "undefined") {
        let touch = e.targetTouches[0];
        pStart.x = touch.screenX;
        pStart.y = touch.screenY;
      } else {
        pStart.x = e.screenX;
        pStart.y = e.screenY;
      }
    }

    function swipe(e) {
      if (typeof e["changedTouches"] !== "undefined") {
        let touch = e.changedTouches[0];
        pCurrent.x = touch.screenX;
        pCurrent.y = touch.screenY;
      } else {
        pCurrent.x = e.screenX;
        pCurrent.y = e.screenY;
      }
      let changeY = pStart.y < pCurrent.y ? Math.abs(pStart.y - pCurrent.y) : 0;
      if (window.pageYOffset === 0) {
        if (changeY > 100) loading();
      }
    }
    document.addEventListener("touchstart", (e) => swipeStart(e), false);
    document.addEventListener("touchmove", (e) => swipe(e), false);
    return (_) => {
      document.removeEventListener("touchstart", (e) => swipeStart(e), false);
      document.removeEventListener("touchmove", (e) => swipe(e), false);
    };
  });

  return (
    <div className="loading-container" ref={loadingContainerRef}>
      <div className="loading-back">
        <div className="loading"></div>
      </div>
    </div>
  );
};

export default PullToRefresh;
