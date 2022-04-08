import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import './App.css';
import app from './firebase.init';

const auth = getAuth(app)

function App() {
  const provider = new GoogleAuthProvider()
  const [user , setUser] = useState({})


  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
    .then (result => {
      // const user = result.user
      setUser(result.user)
      console.log(user)
    })
    .cacth(error => {
      console.error('error', error)
    })
  }
 const handleGoogleSignOut = () =>{
   signOut(auth)
   .then ( () => {
     setUser({})
   })
   .catch(error =>{
     setUser({})
   })
 }

  return (
    <div className="App">
     { user.email ? <button onClick={handleGoogleSignOut} >Sign-Up</button> :<button onClick={handleGoogleSingIn}>Sign-In</button> }
      
      <div>
        <h4>User Name : {user.displayName}</h4>
        <h5>User Email : {user.email}</h5>
        <img src="https://lh3.googleusercontent.com/a/AATXAJz_esdwI_9V6Kft27vuj621buMKgqp8DDWf658=s96-c" alt="" />
      </div>
    </div>
  );
}

export default App;
