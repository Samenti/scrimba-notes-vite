import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtUMUYhiCtlZgMGzaOpH8HEVb_qKaBya8',
  authDomain: 'scrimba-notes-vite.firebaseapp.com',
  projectId: 'scrimba-notes-vite',
  storageBucket: 'scrimba-notes-vite.appspot.com',
  messagingSenderId: '933277514511',
  appId: '1:933277514511:web:e520d1dbdc4951aac5dc7a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, 'notes');
