// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMul6gjkHeF5r9cJR1YTOvYkbjKIKil_o",
  authDomain: "chef-resturent-clint-side.firebaseapp.com",
  projectId: "chef-resturent-clint-side",
  storageBucket: "chef-resturent-clint-side.appspot.com",
  messagingSenderId: "54103075568",
  appId: "1:54103075568:web:d4a84890db904ecb9a3035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app