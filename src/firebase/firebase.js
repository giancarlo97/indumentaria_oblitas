import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBWlZaxvHA2v89xfI-h0gkzlzO1lIPCA1w",
  authDomain: "indumentaria-oblitas.firebaseapp.com",
  projectId: "indumentaria-oblitas",
  storageBucket: "indumentaria-oblitas.appspot.com",
  messagingSenderId: "998709812689",
  appId: "1:998709812689:web:bb3c3b3be1cae4e18694f0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);