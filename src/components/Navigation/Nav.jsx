import React from "react";
import { Link } from "react-router-dom";
import { fields } from "./fields";

const listItems = fields.map((el) => (
  <li className="main-nav__list-element" key={el.id}>
    <Link to={el.path}>{el.title}</Link>
  </li>
));

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">{listItems}</ul>
    </nav>
  );
};

export default Nav;
