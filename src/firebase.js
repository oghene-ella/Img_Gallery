// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: "img-gallery-57191.firebaseapp.com",
	projectId: "img-gallery-57191",
	storageBucket: "img-gallery-57191.appspot.com",
	messagingSenderId: "1014301752187",
	appId: "1:1014301752187:web:ddb167aaad5e4641f99bde",
	measurementId: "G-4Z7M4C9ETW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
