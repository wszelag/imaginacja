import { auth } from "../../config/firebase";
import createUserProfile from "../profile/createUserProfile";

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

  if (errors.length > 0) {
    setErrors(errors);
    return false;
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      setErrors([]);
      createUserProfile(email);
      reset();
    })
    .catch((err) => {
      errors.push("Istnieje użytkownik o podanym adresie e-mail.");
      setErrors(errors);
    });
};

export default registration;
