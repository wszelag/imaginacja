import React from "react";
import ProfileShortcut from "./ProfileShortcut";
import { Link } from "react-router-dom";

const UserPanel = () => {
  return (
    <div className="user-panel">
      <Link to="/rejestracja">zarejestruj sie</Link>
    </div>
  );
};

export default UserPanel;
