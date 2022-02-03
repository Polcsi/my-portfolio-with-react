import React from "react";
import "../css/footer.css";
import logo from "../icons/logo.svg";
import { social } from "../data";
import { BsFillHeartFill } from "react-icons/bs";

const Footer = () => {
  const currentDate = new Date();
  return (
    <footer>
      <div className="upper-layer">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-socail-icons">
          {social.map(({ id, url, icon, text }) => {
            return (
              <article key={id}>
                <a title={text} href={url} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </article>
            );
          })}
        </div>
        <div className="creator">
          <span>
            <BsFillHeartFill />
          </span>
          <span>created by polcsi</span>
        </div>
      </div>
      <div className="down-layer">
        <span>&copy;</span>
        <span>{currentDate.getFullYear()}</span>
        <span>polcsicode.com</span>
        <span>all rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
