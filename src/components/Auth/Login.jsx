import React, { useState } from "react";
import Title from "./Title";
import Button from "./Button";
import SpanWithLink from "./SpanWithLink";
import Errors from "./Errors";
import BackButton from "./BackButton";
import { fieldsData } from "./fieldsData";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [errors, setErrors] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const inputs = fieldsData.map((el) => {
    if (el.name === "confirmPassword") {
      return "";
    }
    return (
      <label className="auth-form__field" key={el.id}>
        <h3 className="auth-form__field-title">{el.title}</h3>
        <input
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
      <BackButton />
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form__form">
        <Title title="Logowanie" />
        {inputs}
        <Errors errors={errors} />
        <Button title="Zaloguj się" />
        <SpanWithLink variant="login" />
      </form>
    </section>
  );
};

export default Login;
