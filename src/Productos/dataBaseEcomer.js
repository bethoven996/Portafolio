import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKl2qRQwe64Va4Vc9pcwB1y3eitfpALYw",
  authDomain: "ecomerce-8ffb3.firebaseapp.com",
  projectId: "ecomerce-8ffb3",
  storageBucket: "ecomerce-8ffb3.appspot.com",
  messagingSenderId: "32538411645",
  appId: "1:32538411645:web:e505e6e5770d6772536714",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
