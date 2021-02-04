import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_Auth_Domain,
    projectId: process.env.REACT_APP_Project_Id,
    storageBucket: process.env.REACT_APP_Storage_Bucket,
    messagingSenderId: process.env.REACT_APP_Messaging_Sender_Id,
    appId: process.env.REACT_APP_App_Id
};
 firebase.initializeApp(firebaseConfig);
 export const firebaseInstance = firebase;
 export const authService = firebase.auth();
 export const dbService = firebase.firestore();