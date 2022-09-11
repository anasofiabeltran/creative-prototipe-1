import React from "react";
import { Link} from "react-router-dom";
import './homePageCss.css'

function HomePage(){
    return(
        <section className="homePageEstudent">
            <div className="homePageEstudent-card">
                <Link className="buttonLink" to="/CreateGame">Crear Juego</Link>
            </div>   
        </section>
    );
}

export {HomePage};