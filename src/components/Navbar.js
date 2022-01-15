import React, { useState, useEffect, useRef } from "react";
import logo from "../icons/logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, social } from "../data";
import "../css/nav.css";

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
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const navHeaderRef = useRef(null);

  useEffect(() => {
    linksContainerRef.current.style.height = `${window.innerHeight}px`;
    if (showLinks) {
      linksContainerRef.current.style.left = "0%";
      document.body.style.overflow = "hidden";
    } else {
      linksContainerRef.current.style.left = "-100%";
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

  return (
    <nav>
      <div className="nav-center">
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
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} onClick={() => setShowLinks(false)}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
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
    </nav>
  );
};

export default Navbar;
