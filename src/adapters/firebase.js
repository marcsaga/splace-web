import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/functions';
import { firebaseConfig } from '../../firebase.config';

const config = firebaseConfig;
let instance;
function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = firebase.initializeApp(config);
    return instance;
  }
  return null;
}

export default getFirebase;
