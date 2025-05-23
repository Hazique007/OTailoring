import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyC8a_gJZ2ECElfzpuK53lPpt1Cl8JwUkqE",
  authDomain: "doorstep-notification.firebaseapp.com",
  projectId: "doorstep-notification",
  storageBucket: "doorstep-notification.firebasestorage.app",
  messagingSenderId: "425149775747",
  appId: "1:425149775747:web:e9030fb07c24a76d7c00b6",
  measurementId: "G-MZCXEB1FV7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
const analytics = getAnalytics(app);
