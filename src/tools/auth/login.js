import { auth } from "../../config/firebase";

const login = (data) => {
  const { email, password } = data;
  let errors = [];
  if (!email) {
    alert("Podaj adres e-mail.");
  }
  if (!password) {
    alert("Podaj hasło.");
  }
  if (password.length < 8) {
    alert("Hasło powinno zawierać min. 8 znaków.");
  }
  if (errors.length > 0) {
    return false;
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("ds");
    })
    .catch((err) => {
      alert("Błędne dane logowania");
    });
};

export default login;
