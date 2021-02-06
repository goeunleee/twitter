import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import {authService} from "fBase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [userObj, setUserObj] = useState(null);
useEffect(()=>{
  authService.onAuthStateChanged((user) =>{
    if(user){
      setIsLoggedin(true);
      setUserObj(user);
    }else{
      setIsLoggedin(false);
    }
    setInit(true);
  })
})

  return (
  <>
  {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : "initializing...."}
  <footer>&copy; Twitter {new Date().getFullYear()}</footer>
        </>//rlaalstjrqkqh  tlfgmsep dothddlqjtjt
        )
}

export default App;
