import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAS6S_HUGHVw_tmQARqXHniikR7bJ4KhEE',
  authDomain: 'book-catalog-b53c0.firebaseapp.com',
  projectId: 'book-catalog-b53c0',
  storageBucket: 'book-catalog-b53c0.appspot.com',
  messagingSenderId: '412300701522',
  appId: '1:412300701522:web:06e218cbed30edfcb8948b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
