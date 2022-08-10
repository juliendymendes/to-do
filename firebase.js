import {initializeApp} from 'firebase/app';
import {getFirestore } from 'firebase/firestore';
import {getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyD8Lp4pvklVeri88hO7nTRKPfYRXaDehj0",
	authDomain: "revisoes-app.firebaseapp.com",
	databaseURL: "https://revisoes-app-default-rtdb.firebaseio.com",
	projectId: "revisoes-app",
	storageBucket: "revisoes-app.appspot.com",
	messagingSenderId: "123417468685",
	appId: "1:123417468685:web:10d036a7c7297ac66f1a44"
  };

  

let database

const app = initializeApp(firebaseConfig)
database = getFirestore(app)
const auth = getAuth()

export {database, auth}