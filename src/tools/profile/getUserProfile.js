import { firestore } from "../../config/firebase";

const getUserProfile = (email) => {
  const docRef = firestore.collection("users").doc(email);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log(doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

export default getUserProfile;
