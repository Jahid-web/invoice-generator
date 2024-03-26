import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbNpeocZHa668UFRwY1_MsOdXUwKqWezg",
  authDomain: "invoice-generator-eb347.firebaseapp.com",
  projectId: "invoice-generator-eb347",
  storageBucket: "invoice-generator-eb347.appspot.com",
  messagingSenderId: "1090759686931",
  appId: "1:1090759686931:web:9972781f8d74bf998838e6",
  measurementId: "G-EN5WQS48K6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
