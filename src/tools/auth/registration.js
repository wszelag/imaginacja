import { auth } from "../../config/firebase";

const registration = (data, setErrors, reset) => {
  const { email, password, confirmPassword } = data;
  let errors = [];
  if (!email) {
    errors.push("Podaj adres e-mail.");
  }
  if (!password) {
    errors.push("Podaj hasło.");
  }
  if (password.length < 8) {
    errors.push("Hasło powinno zawierać min. 8 znaków.");
  }
  if (password !== confirmPassword) {
    errors.push("Hasła są różne.");
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      reset();
    })
    .catch((err) => {
      errors.push("Istnieje użytkownik o podanym adresie e-mail.");
      setErrors(errors);
    });
};

export default registration;
