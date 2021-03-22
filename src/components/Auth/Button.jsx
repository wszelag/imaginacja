import React from "react";

const Button = ({ title }) => {
  return (
    <button className="auth-form__button" type="submit">
      {title}
    </button>
  );
};

export default Button;
