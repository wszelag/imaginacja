import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="landing-page__profile-link">
      <Link to="/profil">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

export default Welcome;
