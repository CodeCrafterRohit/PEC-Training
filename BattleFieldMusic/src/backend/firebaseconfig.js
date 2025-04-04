import { initializeApp } from "firebase/app";

//? Keep this Authentication and Database services as it is as it is in the code
//! Authentication Services from Firebase
import { getAuth } from "firebase/auth";

//! Database Services from firebase
import { getFirestore } from "firebase/firestore";


//! Replace this code with your firebase sdk code only
//! Without this you cannot see the data in your firebase understanding
//? Starting
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4dH1UbpCARwYpF85DwyRLlLZE2k9Omus",
  authDomain: "battle-field-music-e98dc.firebaseapp.com",
  projectId: "battle-field-music-e98dc",
  storageBucket: "battle-field-music-e98dc.firebasestorage.app",
  messagingSenderId: "908624337101",
  appId: "1:908624337101:web:4ab7ab60ee6df8d9b8b184",
};
//? Ending

// Keep this entire code as it is
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);

export default firebaseApp;
