import React from "react";
import { Link} from "react-router-dom";
import './headerCss.css';


function Header(props){
    return(
        <header className="header">
          <div className="header-logo">
            <Link to="/PrincipalPage"><img src={props.logo}  alt="logo"/></Link>
          </div>
          
        </header>
    );
}

export {Header};