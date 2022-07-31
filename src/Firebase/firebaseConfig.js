import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBhOggrn_HkB42w7QsYg2grPMbMw944B-Q",
	authDomain: "e-clone-49574.firebaseapp.com",
	projectId: "e-clone-49574",
	storageBucket: "e-clone-49574.appspot.com",
	messagingSenderId: "1058414540015",
	appId: "1:1058414540015:web:7ede2ac11cb7592378d71a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
