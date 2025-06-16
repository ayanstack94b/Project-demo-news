// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIf4XQUlPl9x8Kj9UC-g8fE3Vk4VQM7UI",
  authDomain: "project-news-demo.firebaseapp.com",
  projectId: "project-news-demo",
  storageBucket: "project-news-demo.firebasestorage.app",
  messagingSenderId: "996570809643",
  appId: "1:996570809643:web:48242c0cc1295a9b70316e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;