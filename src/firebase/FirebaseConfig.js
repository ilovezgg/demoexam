
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
 apiKey: "AIzaSyB3uOfQe0MDkvBRpZFOsxk_gugea1kKdqk",
  authDomain: "college-7b0a8.firebaseapp.com",
  projectId: "college-7b0a8",
  storageBucket: "college-7b0a8.firebasestorage.app",
  messagingSenderId: "775355133784",
  appId: "1:775355133784:web:aee2bc6ecebd63f91d7f2d",
  measurementId: "G-TB0SJZP6Y8"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;