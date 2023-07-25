import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBPUMdEnpKbovh6H9MXgeWdk1gT09NeNe0",
    authDomain: "olx-clone-91724.firebaseapp.com",
    projectId: "olx-clone-91724",
    storageBucket: "olx-clone-91724.appspot.com",
    messagingSenderId: "948340268653",
    appId: "1:948340268653:web:d306949513eb72ecbfa964",
    measurementId: "G-HLTJLJF15L"
  };

  export default firebase.initializeApp(firebaseConfig)

