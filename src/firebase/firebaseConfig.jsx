import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC14HfRd7lHWvG4iBRTTghzJQrJtPEYKW4",
  authDomain: "meditrack-8f9cd.firebaseapp.com",
  projectId: "meditrack-8f9cd",
  storageBucket: "meditrack-8f9cd.firebasestorage.app",
  messagingSenderId: "554175158595",
  appId: "1:554175158595:web:f9551d0d3e5b7e7d9bf7f6",
  measurementId: "G-EG0FB3ERHE"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, analytics, auth, firestore };
