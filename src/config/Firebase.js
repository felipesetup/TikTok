import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD_b76fyFrmZThT3WmukPgRp0__HG2MuLk",
  authDomain: "tiktok---jornada-388af.firebaseapp.com",
  projectId: "tiktok---jornada-388af",
  storageBucket: "tiktok---jornada-388af.appspot.com",
  messagingSenderId: "960628099944",
  appId: "1:960628099944:web:be821f101fd74175a9e4dd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
