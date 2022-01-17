import React, { useState, useEffect, useRef } from "react";
import logo from "../icons/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { social } from "../data";
import "../css/nav.css";
import NavLinks from "../components/NavLinks";

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

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [scroll, setScroll] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const navHeaderRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    linksContainerRef.current.style.height = `${window.innerHeight}px`;
    if (showLinks) {
      linksContainerRef.current.style.left = "0%";
      document.body.style.overflow = "hidden";
    } else {
      linksContainerRef.current.style.left = "-110%";
      document.body.style.overflow = "auto";
    }
  }, [showLinks]);

  useEffect(() => {
    const debouncedWindowResize = debounce(function handleResize() {
      linksContainerRef.current.style.height = `${window.innerHeight}px`;
      if (showLinks && window.innerWidth >= 800) {
        document.body.style.overflow = "auto";
      } else if (showLinks && window.innerWidth <= 800) {
        document.body.style.overflow = "hidden";
      }
    }, 1000);

    window.addEventListener("resize", debouncedWindowResize);
    return () => {
      window.removeEventListener("resize", debouncedWindowResize);
    };
  }, [showLinks]);
  window.addEventListener("scroll", function () {
    this.scrollY > 50 ? setScroll(true) : setScroll(false);
    /* progress bar */
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    this.document.getElementById("my-bar").style.width = scrolled + "%";
  });

  return (
    <nav>
      <div className={scroll ? `nav-center nav-sticky` : "nav-center"}>
        <div className="nav-header" ref={navHeaderRef}>
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(true)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <div className="nav-header mobile-nav">
            <div className="logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <button
              className="nav-toggle close-nav-btn"
              onClick={() => setShowLinks(false)}
            >
              <FaTimes />
            </button>
          </div>
          <ul className="links" ref={linksRef}>
            <NavLinks setShowLinks={setShowLinks} />
          </ul>
          <ul className="social-icons">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a
                    className="icon"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={
          scroll
            ? "progress-scroll-container show-scroll-container"
            : "progress-scroll-container"
        }
        ref={progressBarRef}
      >
        <div className="progress-scroll-bar" id="my-bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
