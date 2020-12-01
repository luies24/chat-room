import React from 'react'
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyB9zXi-HZn8wkN90IYRLYzQo1OrizxKZbE",
  authDomain: "chat-room-cbeaf.firebaseapp.com",
  databaseURL: "https://chat-room-cbeaf.firebaseio.com",
  projectId: "chat-room-cbeaf",
  storageBucket: "chat-room-cbeaf.appspot.com",
  messagingSenderId: "381329165500",
  appId: "1:381329165500:web:352a016aa71eddd57914b9",
  measurementId: "G-EDFYGM14YC"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {

  const [user] = useAuthState(auth)

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
    }

    return (
      <button onClick={signInWithGoogle} >Sign in with Google</button>
    )
  }

  function SignOut() {
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

  function ChatRoom() {
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, { idField: 'id' })

    return (
      <>
        <div>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>
      </>
    )
  }

  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'


    return (
      <p>{text}</p>
    )
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
