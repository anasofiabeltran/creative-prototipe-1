import React from "react";
import beneficios from '../assets/img/beneficios.png'
import play from '../assets/img/demo.png'

function PrincipalPage(){
    return(
    <React.Fragment>
      <div>
      <img src={play} alt="tabla de beneficios"/>
      </div>
      <div>
        <img src={beneficios} alt="tabla de beneficios"/>
      </div>
    </React.Fragment>
    );
}

export {PrincipalPage}