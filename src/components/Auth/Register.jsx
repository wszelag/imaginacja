import React, { useState } from "react";
import Title from "./Title";
import Button from "./Button";
import SpanWithLink from "./SpanWithLink";
import Errors from "./Errors";
import BackButton from "./BackButton";
import registration from "../../tools/auth/registration";
import { useForm } from "react-hook-form";
import { fieldsData } from "./fieldsData";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const [errors, setErrors] = useState([]);
  const onSubmit = (data) => {
    registration(data, setErrors, reset);
  };

  const inputs = fieldsData.map((el) => (
    <label className="auth-form__field" key={el.id}>
      <h3 className="auth-form__field-title">{el.title}</h3>
      <input
        type={el.type}
        className="auth-form__input"
        name={el.name}
        ref={register}
      />
    </label>
  ));

  return (
    <section className="auth-form ">
      <BackButton />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="auth-form__form auth-form__form--register"
      >
        <Title title="Rejestracja" />
        {inputs}
        <Errors errors={errors} />
        <Button title="Zarejestruj się" />
        <SpanWithLink variant="register" />
      </form>
    </section>
  );
};

export default Register;
