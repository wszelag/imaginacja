import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-element">
          <Link to="/">Start</Link>
        </li>
        <li className="main-nav__list-element">
          <Link to="/catering">Catering</Link>
        </li>
        <li className="main-nav__list-element">
          <Link to="/sklep">Sklep</Link>
        </li>
        <li className="main-nav__list-element">
          <Link to="/obrazy">Naturalne obrazy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
