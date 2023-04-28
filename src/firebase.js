import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// config firebase
const firebaseConfig = {

    apiKey: "AIzaSyAbg14vrfezK56rb1IlHSvNBT7sBgNfBpQ",
    authDomain: "data-reservation.firebaseapp.com",
    projectId: "data-reservation",
    storageBucket: "data-reservation.appspot.com",
    messagingSenderId: "674639377448",
    appId: "1:674639377448:web:259941321634cc7114311d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);