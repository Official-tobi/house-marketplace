import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHXfzs2VOkFmJHgJ75cQgXauRku5uqp_I",
    authDomain: "house-marketplace-app-85236.firebaseapp.com",
    projectId: "house-marketplace-app-85236",
    storageBucket: "house-marketplace-app-85236.appspot.com",
    messagingSenderId: "476110208291",
    appId: "1:476110208291:web:732db188867a8ca95aa096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()