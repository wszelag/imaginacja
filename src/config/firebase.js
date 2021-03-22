import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsNGPQcXDfEq05gsIm1u-7ZfwUVjNNMog",
  authDomain: "imaginacja-8a546.firebaseapp.com",
  projectId: "imaginacja-8a546",
  storageBucket: "imaginacja-8a546.appspot.com",
  messagingSenderId: "484074354788",
  appId: "1:484074354788:web:ef393e7860398e2d454771",
  measurementId: "G-XYNTWZ337V"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
