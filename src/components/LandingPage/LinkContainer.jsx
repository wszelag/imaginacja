import React from "react";
import { Link } from "react-router-dom";

const LinkContainer = ({ path, name, description, buttonTxt }) => {
  return (
    <div className="landing-page__link-container">
      <div className="landing-page__card">
        <h2 className="landing-page__title">{name}</h2>
        <span className="landing-page__description">{description}</span>
        <Link to={path}>
          <button className="landing-page__button">{buttonTxt}</button>
        </Link>
      </div>
    </div>
  );
};

export default LinkContainer;
