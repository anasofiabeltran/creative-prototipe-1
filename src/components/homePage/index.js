import React from "react";
import { Link} from "react-router-dom";
import './homePageCss.css'

function HomePage(){
    return(
        <section className="homePage">
            <div className="homePage-card">
                <Link className="buttonLink" to="/CreateGame">Crear Juego</Link>
            </div>
            <div className="homePage-card">
                <Link className="buttonLink" to="/SeeGrades">Ver calificaciones</Link>
            </div>  
            <div className="homePage-card">
                <Link className="buttonLink" to="/menuJuegos">Jugar</Link>
            </div>

            <Link className="buttonLink" to="/PrincipalPage">Cancelar</Link>     
        </section>
    );
}

export {HomePage};