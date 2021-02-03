import { authService } from "fBase";
import React from "react";
import { useHistory } from "react-router-dom";

export default () =>{
    const history = useHistory();
    const onLogoutClick = ()=>{
        authService.signOut();
        history.push("/");
    }
    return(
        <>
        <button onClick={onLogoutClick}>log out</button>
        </>
    )
}