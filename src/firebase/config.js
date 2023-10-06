
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeRix4PfL2m4y4HKYi9_nqFGS09Wpf7Sw",
    authDomain: "e-commerce-suplementos-pmy.firebaseapp.com",
    projectId: "e-commerce-suplementos-pmy",
    storageBucket: "e-commerce-suplementos-pmy.appspot.com",
    messagingSenderId: "326568813687",
    appId: "1:326568813687:web:021df9e763ddf18a2e5272"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app