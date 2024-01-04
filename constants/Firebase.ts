import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// https://trash-smart-eb838-default-rtdb.firebaseio.com/
const firebaseConfig = {
  apiKey: "AIzaSyCz1JKcdl2DptqNUhyVkI4LCv6W4UVCRVQ",
  authDomain: "trash-smart-eb838.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://trash-smart-eb838-default-rtdb.firebaseio.com",
  projectId: "trash-smart-eb838",
  //   storageBucket: "trash-smart-eb838.appspot.com",
  //   messagingSenderId: "SENDER_ID",
  //   appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  //   measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
