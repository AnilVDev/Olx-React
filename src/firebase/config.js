import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyAZ38tCbo4F8YA812goYZf4K8kVOEIJD_s",
    authDomain: "olxdemo-d4cde.firebaseapp.com",
    projectId: "olxdemo-d4cde",
    storageBucket: "olxdemo-d4cde.appspot.com",
    messagingSenderId: "759153930653",
    appId: "1:759153930653:web:ef7ae556f024b3d5a27f74",
    measurementId: "G-K9MF1JNMVC"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// export default firebaseApp;
export default app