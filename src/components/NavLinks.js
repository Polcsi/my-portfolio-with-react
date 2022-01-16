import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { links } from "../data";

const NavLinks = ({ setShowLinks }) => {
  return links.map((link) => {
    const { id, url, text, type } = link;
    if (type === "route") {
      return (
        <li key={id} onClick={() => setShowLinks(false)}>
          <Link to={url}>{text}</Link>
        </li>
      );
    } else {
      return (
        <li key={id}>
          <ScrollLink
            to={url}
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            isDynamic={true}
            ignoreCancelEvents={true}
            onClick={() => setShowLinks(false)}
            style={{ cursor: "pointer" }}
          >
            {text}
          </ScrollLink>
        </li>
      );
    }
  });
};

export default NavLinks;
