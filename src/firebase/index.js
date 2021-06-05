import firebase from 'firebase';
import 'firebase/firestore'

const app = firebase.initializeApp({ 
    apiKey: "AIzaSyBlHBEp5Dm1PP61jAFd_KYGkbN2o2NYAGI",
    authDomain: "panda-react.firebaseapp.com",
    projectId: "panda-react",
    storageBucket: "panda-react.appspot.com",
    messagingSenderId: "726526414464",
    appId: "1:726526414464:web:9bb5833470598f43442065"

 })

 export const getFirebase = ()=> app

 export const getFirestore = ()=> firebase.firestore(app)