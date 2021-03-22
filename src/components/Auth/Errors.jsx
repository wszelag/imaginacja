import React from "react";

const Errors = ({ errors }) => {
  const content = errors.map((el, id) => <span key={id}>{el}</span>);
  return <span className="auth-form__errors">{content}</span>;
};

export default Errors;
