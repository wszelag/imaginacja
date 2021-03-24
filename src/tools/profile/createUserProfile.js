import { firestore } from "../../config/firebase";

const createUserProfile = async (email) => {
  firestore
    .collection("users")
    .doc(email)
    .set({
      name: "",
      surname: "",
      email: email,
      address: {
        city: "",
        postcode: "",
        street: "",
        building: "",
        apartment: ""
      },
      points: 0,
      accessLevel: 0,
      shoppingHistory: [],
      date: Date.now()
    });
};

export default createUserProfile;
