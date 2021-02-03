import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import {authService} from "fBase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedin] = useState(false);
useEffect(()=>{
  authService.onAuthStateChanged((user) =>{
    if(user){
      setIsLoggedin(true);
    }else{
      setIsLoggedin(false);
    }
    setInit(true);
  })
})

  return (
  <>
  {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "initializing...."}
  <footer>&copy; Twitter {new Date().getFullYear()}</footer>
        </>//rlaalstjrqkqh  tlfgmsep dothddlqjtjt
        )
}

export default App;
