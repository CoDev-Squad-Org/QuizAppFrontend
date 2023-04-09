// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAASsPehIli3gVhu_LAfcw74jef1oqDPaM",
	authDomain: "quizz-app-52383.firebaseapp.com",
	projectId: "quizz-app-52383",
	storageBucket: "quizz-app-52383.appspot.com",
	messagingSenderId: "109687866188",
	appId: "1:109687866188:web:8565d4d568feb4841245e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


