import { auth } from "../../config/firebase";

const login = async (data, setIsLoading) => {
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
  setIsLoading(true);

  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      return true;
    })
    .catch((err) => {
      alert("Błędne dane logowania");
      setIsLoading(false);
      return false;
    });
};

export default login;
