import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  projectId: "sample-file-upload-a64be",
  appId: "1:565336345479:web:d6cd13bb40eccf8d51a122",
  storageBucket: "sample-file-upload-a64be.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyANXovOFdUOVKyjwUqp7SF-2yIRXz36fkk",
  authDomain: "sample-file-upload-a64be.firebaseapp.com",
  messagingSenderId: "565336345479",
  measurementId: "G-G99JTYEVKM",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };