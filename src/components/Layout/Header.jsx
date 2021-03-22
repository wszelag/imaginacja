import React from "react";
import Nav from "../Navigation/Nav";
import UserPanel from "../UserPanel/UserPanel";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">IMAGINACJA</div>
      <Nav />
      <UserPanel />
    </header>
  );
};

export default Header;
