import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import login from "../../tools/auth/login";
import { Loader } from "./Loader";

const SmallLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    login(data, setIsLoading);
    reset();
  };

  return (
    <div className="landing-page__small-login">
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)} className="landing-page__form">
        <input
          className="landing-page__input"
          type="email"
          name="email"
          ref={register}
          placeholder="email"
        />
        <input
          className="landing-page__input"
          type="text"
          name="password"
          ref={register}
          placeholder="hasło"
        />
        <button className="landing-page__form-button" type="submit">
          Zaloguj się
        </button>
        <span className="landing-page__reg-link">
          Nie masz konta? <Link to="/rejestracja">Zarejestruj się.</Link>
        </span>
      </form>
    </div>
  );
};

export default SmallLogin;
