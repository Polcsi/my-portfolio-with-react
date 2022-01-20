import React from "react";
import { Link } from "react-router-dom";
import "../css/error.css";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-background-circle"></div>
      <div className="error-container">
        <div className="error-title">
          <h1>404</h1>
          <h2>ooops... page not found</h2>
        </div>
        <div className="home-container">
          <p>
            The Page you are looking for does not exist. But you can click the
            button below to go back to the homepage.
          </p>
          <Link className="btn white-border-btn dark-border" to="/">
            home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
