import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyCwAPn4bcCrUojFanAq7LisoSbsyWEBH00",
	authDomain: "whatsapp-clone-a4e3b.firebaseapp.com",
	databaseURL: "https://whatsapp-clone-a4e3b.firebaseio.com",
	projectId: "whatsapp-clone-a4e3b",
	storageBucket: "whatsapp-clone-a4e3b.appspot.com",
	messagingSenderId: "298310309163",
	appId: "1:298310309163:web:7f077941d963d13cc2a16e",
	measurementId: "G-CM9BF2R8VF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
