import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyB9zXi-HZn8wkN90IYRLYzQo1OrizxKZbE",
    authDomain: "chat-room-cbeaf.firebaseapp.com",
    databaseURL: "https://chat-room-cbeaf.firebaseio.com",
    projectId: "chat-room-cbeaf",
    storageBucket: "chat-room-cbeaf.appspot.com",
    messagingSenderId: "381329165500",
    appId: "1:381329165500:web:352a016aa71eddd57914b9",
    measurementId: "G-EDFYGM14YC"
}

const Firebase = firebase.initializeApp(config);
export default Firebase;