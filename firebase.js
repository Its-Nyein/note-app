// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXDKpVlhYYCCpDtAfSrJsItQ14DJZ3yK0",
  authDomain: "note-app-1bdec.firebaseapp.com",
  projectId: "note-app-1bdec",
  storageBucket: "note-app-1bdec.appspot.com",
  messagingSenderId: "626815977756",
  appId: "1:626815977756:web:682735490e209f6bc5d2d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");

