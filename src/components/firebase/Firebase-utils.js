import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBHNC4QnpA6bdZqDI0E6X29pcAypdCTriQ',
  authDomain: 'isgms-tool.firebaseapp.com',
  databaseURL: 'https://isgms-tool.firebaseio.com',
  projectId: 'isgms-tool',
  storageBucket: 'isgms-tool.appspot.com',
  messagingSenderId: '804670751813',
  appId: '1:804670751813:web:f8f17a12cfc824a70e8f2c',
  measurementId: 'G-G47XYTQ6DL'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
