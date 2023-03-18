import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import {getStorage} from 'firebase/storage';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyBU4EKHBp5L7GTOl7eCDVqMYed_ZMA99QA",
  authDomain: "hack36-83483.firebaseapp.com",
  projectId: "hack36-83483",
  storageBucket: "hack36-83483.appspot.com",
  messagingSenderId: "568739059463",
  appId: "1:568739059463:web:cf5878aa066dd2fd2517a2",
  measurementId: "G-843SRHH96X"
};

export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const storage=getStorage(app);
