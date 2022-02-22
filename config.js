import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiL5I7EX1NhhBUaJEhtdociNNpHN9_sB8',
  authDomain: 'pro-c60-school-attendanc-49c59.firebaseapp.com',
  databaseURL: 'https://pro-c60-school-attendanc-49c59-default-rtdb.firebaseio.com/',
  projectId: 'pro-c60-school-attendanc-49c59',
  storageBucket: 'pro-c60-school-attendanc-49c59.appspot.com',
  messagingSenderId: '1083151930374',
  appId: '1:1083151930374:web:2fd5f320c6618878879f87',
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();
