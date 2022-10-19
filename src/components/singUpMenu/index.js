import React from "react";
import {Link} from "react-router-dom";
import './singUpMenuCss.css'

function SingUpMenu(){
    return(
        <section className="SingUpMenu">
            <p>Seleccioné el tipo de usuario al que quiere pertenecer</p>
            
                <Link className="buttonLink" to="/singUpEstudent">
                    Estudiante
                </Link>
          
            
                <Link className="buttonLink" to="/registrarProfesor">
                    Docente
                </Link>
            
            
                <Link className="buttonLink" to="/singUpEstudent">
                    Independiente
                </Link>
            
                <Link className="buttonLink" to="/PrincipalPage">
                    Cancelar
                </Link>
            
        </section>
    )
}

export {SingUpMenu};