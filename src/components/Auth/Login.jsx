import React, { useState } from "react";
import Button from "./Button";
import SpanWithLink from "./SpanWithLink";
import Errors from "./Errors";
import BackButton from "./BackButton";
import { fieldsData } from "./fieldsData";
import { useForm } from "react-hook-form";
import login from "../../tools/auth/login";
import { Header } from "./Header";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [errors, setErrors] = useState([]);

  const onSubmit = (data) => {
    login(data, setErrors, reset);
  };

  const inputs = fieldsData.map((el) => {
    if (el.name === "confirmPassword") {
      return "";
    }
    return (
      <label className="auth-form__field" key={el.id}>
        <input
          placeholder={el.title}
          type={el.type}
          className="auth-form__input"
          name={el.name}
          ref={register}
        />
      </label>
    );
  });

  return (
    <section className="auth-form">
      <div className="auth-form__form-container">
        <Header title="Logowanie" />
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form__form">
          {inputs}
          <Errors errors={errors} />
          <Button title="Zaloguj się" />
          <SpanWithLink variant="login" />
        </form>
      </div>
    </section>
  );
};

export default Login;
