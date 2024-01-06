import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmv6F4H7UKpGCdHddi2ZhzT_CliU33Ibs",
  authDomain: "react-notes-7e95f.firebaseapp.com",
  projectId: "react-notes-7e95f",
  storageBucket: "react-notes-7e95f.appspot.com",
  messagingSenderId: "400294071026",
  appId: "1:400294071026:web:5b43a59c0f7621aa6a9e6b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
