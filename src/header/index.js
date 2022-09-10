import React from "react";
import './headerCss.css'

function Header(props){
    return(
        <header>
          <img src={props.logo}  alt="logo"/>  
        </header>
    );
}

export {Header};