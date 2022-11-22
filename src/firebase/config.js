import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBaOxEfybP9JTWTixh4XVbVScYLDAKqJkU",
    authDomain: "vueblog-c0893.firebaseapp.com",
    projectId: "vueblog-c0893",
    storageBucket: "vueblog-c0893.appspot.com",
    messagingSenderId: "659963468790",
    appId: "1:659963468790:web:d5009c26c6aeb52a8385d7"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }