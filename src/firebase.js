import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAvXRXjv1Or4mQ1HcAxmcBeg7Ji8q188eU",
  authDomain: "all-gym-ae5a0.firebaseapp.com",
  projectId: "all-gym-ae5a0",
  storageBucket: "all-gym-ae5a0.appspot.com",
  messagingSenderId: "555008173091",
  appId: "1:555008173091:web:d371373f395813170b7d96",
  measurementId: "G-R6W45TQ025",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);

export { db, app, auth };
