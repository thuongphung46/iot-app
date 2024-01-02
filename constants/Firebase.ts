import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  //   storageBucket: "PROJECT_ID.appspot.com",
  //   messagingSenderId: "SENDER_ID",
  //   appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  //   measurementId: "G-MEASUREMENT_ID",
};

export const app = initializeApp(firebaseConfig);

// import firebase from "firebase";

// // Define a variable of the project name, which is used in the config parameters for firebase
// const firebaseProjectName = "<YOUR_FIREBASE_PROJECT_NAME>"

// // Parameters required by the initializeApp used below
// const config = {
//   apiKey: "<YOUR_WEB_API_KEY>",
//   authDomain: `${firebaseProjectName}.firebaseapp.com`,
//   databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
//   projectId: `${firebaseProjectName}`
// };

// firebase.initializeApp(config);

// export default firebase;

// import React, { useState, useEffect } from "react";
// import "./style.css";
// import Canvas from "./canvas";
// import firebase from "./firebase";

// const App = () => {
//   // Define the state of the component
//   const [distance, setDistance] = useState(0);

//   // Listen to changes on the firebase database, specifically the "distance" entry
//   useEffect(() => {
//     const getValue = firebase.database().ref("distance");
//     getValue.on("value", snapshot => {
//       let value = snapshot.val();
//       // Whenever the value changes on the server, it is also reset on the running app through the variable
//       setDistance(value.toFixed(2));
//     });
//   }, []);

//   return (
//     <div className="litreDisplay">
//       <div className="canvas">
//         {/* The variable is passed down to the Canvas component, which will re-render every time its altered*/}
//         <Canvas distance={distance} />
//       </div>
//       <div className="displayValue">
//         <span>{distance}cm</span>
//       </div>
//     </div>
//   );
// };

// export default App;
