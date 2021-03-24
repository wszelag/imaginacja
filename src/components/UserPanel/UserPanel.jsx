import React from "react";
import ProfileShortcut from "./ProfileShortcut";
import { Link } from "react-router-dom";

const UserPanel = ({ user }) => {
  console.log(user);
  return (
    <div className="user-panel">
      <Link to="/rejestracja">Zarejestruj sie</Link>
    </div>
  );
};

export default UserPanel;
