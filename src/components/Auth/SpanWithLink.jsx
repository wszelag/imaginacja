import React from "react";
import { Link } from "react-router-dom";

const SpanWithLink = ({ variant }) => {
  let text = "";
  let textLink = "";
  let path = "";
  if (variant === "register") {
    text = "Masz już konto?";
    path = "/login";
    textLink = "Zaloguj się";
  } else if (variant === "login") {
    text = "Nie masz konta";
    path = "/rejestracja";
    textLink = "Zarejestruj się";
  }
  return (
    <span className="auth-form__link">
      {text} <Link to={path}>{textLink}</Link>
    </span>
  );
};

export default SpanWithLink;
