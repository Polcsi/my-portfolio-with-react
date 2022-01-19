import React, { useEffect, useRef } from "react";
import "../css/home.css";
import scrollIcon from "../icons/scroll-icon.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const rotate = useRef(null);
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    let toRotate = rotate.current.getAttribute("data-rotate");
    let period = rotate.current.getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(rotate.current, JSON.parse(toRotate), period);
    }
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-grid">
        <div className="hero-header">
          <h2>welcome to my website</h2>
          <h1>
            <span
              ref={rotate}
              className="txt-rotate"
              data-period="2000"
              data-rotate='[ "web developer", "UX & UI Designer", "frontend developer", "backend developer", "IT engineer" ]'
            ></span>
          </h1>
          <Link className="btn white-border-btn" to="/contact">
            contact me
          </Link>
        </div>
      </div>
      <img className="hero-scroll-icon" src={scrollIcon} alt="scroll-icon" />
    </div>
  );
};

export default Hero;
