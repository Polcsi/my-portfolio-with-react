import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const NavLinks = ({ setShowLinks, links }) => {
  return links.map((link, index) => {
    const { url, title, type, active } = link;
    if (type === "route") {
      return (
        <li key={index} onClick={() => setShowLinks(false)}>
          <Link className={active ? "active-link" : ""} to={url}>
            {title}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <ScrollLink
            to={title}
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            isDynamic={true}
            ignoreCancelEvents={true}
            onClick={() => setShowLinks(false)}
            style={{ cursor: "pointer" }}
          >
            {title}
          </ScrollLink>
        </li>
      );
    }
  });
};

export default NavLinks;
