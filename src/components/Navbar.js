import React, { useState, useEffect } from "react";
import logo from "../icons/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { social } from "../data";
import "../css/nav.css";
import NavLinks from "../components/NavLinks";
import { Link } from "react-router-dom";

const Navbar = ({ links }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function scrollEvent() {
      this.scrollY > 50 ? setScroll(true) : setScroll(false);
      /* progress bar */
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      this.document.getElementById("my-bar").style.width = scrolled + "%";
    }
    window.addEventListener("scroll", scrollEvent);
    return (_) => {
      window.removeEventListener("scroll", scrollEvent);
    };
  });

  const handlingEvents = () => {
    let classes = "navbar";
    if (scroll) {
      classes += " sticky";
    }
    if (showLinks) {
      classes += " show";
      document.body.classList.add("disabledScroll");
    } else {
      document.body.classList.remove("disabledScroll");
    }
    return classes;
  };

  return (
    <nav className={handlingEvents()}>
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="menu-list">
          <div className="sidebar-logo logo">
            <img src={logo} alt="logo" />
          </div>
          <div
            className={
              showLinks ? "icon cancel-btn show" : "icon cancel-btn hide"
            }
          >
            <FaTimes onClick={() => setShowLinks(false)} />
          </div>
          <NavLinks setShowLinks={setShowLinks} links={links} />
          <ul className="social-icons-nav">
            {social.map(({ id, url, icon, text }) => {
              return (
                <li key={id}>
                  <a
                    href={url}
                    title={text}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </ul>
        <div
          className={
            showLinks || links.length === 0
              ? "icon menu-btn hide"
              : "icon menu-btn show"
          }
        >
          <FaBars onClick={() => setShowLinks(true)} />
        </div>
      </div>
      <div
        className={
          scroll
            ? "progress-scroll-container show-scroll-container"
            : "progress-scroll-container"
        }
      >
        <div className="progress-scroll-bar" id="my-bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
