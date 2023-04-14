import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAd5pJjNxRW5K1sgRRrZMIhzhsxXbz6VZk",
    authDomain: "financial-market-news-bl-aeed0.firebaseapp.com",
    projectId: "financial-market-news-bl-aeed0",
    storageBucket: "financial-market-news-bl-aeed0.appspot.com",
    messagingSenderId: "743608207299",
    appId: "1:743608207299:web:931f77c7d1107ac61c9f76"
  };

  const app =  initializeApp(firebaseConfig);

  
  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth = getAuth(app);

