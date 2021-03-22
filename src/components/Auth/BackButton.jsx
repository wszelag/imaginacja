import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <button className="auth-form__back-button">
      <Link to="">Back</Link>
    </button>
  );
};

export default BackButton;
