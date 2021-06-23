import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWitg9ianiSnIqZQPi-xA92Zai1WR9KYE",
    authDomain: "rookas-firebase-login-log-app.firebaseapp.com",
    projectId: "rookas-firebase-login-log-app",
    storageBucket: "rookas-firebase-login-log-app.appspot.com",
    messagingSenderId: "603805763658",
    appId: "1:603805763658:web:920b12ccee74f24658beb3",
    measurementId: "G-SS5MXBB0P6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};