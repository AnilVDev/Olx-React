import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1uNSlzDyyR1KV8g-Jqz00kxMxA_cA8mM",
    authDomain: "olxdemo-a9dda.firebaseapp.com",
    projectId: "olxdemo-a9dda",
    storageBucket: "olxdemo-a9dda.appspot.com",
    messagingSenderId: "95924214227",
    appId: "1:95924214227:web:ea0b619410c2a5cdd67726",
    measurementId: "G-QP1GKW9JPF"
  };



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// export default firebaseApp;
export default app