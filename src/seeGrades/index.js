import React from "react";
import downArrow from "../assets/img/downArrow.png";
import "./seeGradesCss.css"
import { Link} from "react-router-dom";
function SeeGrades(){
    return(
        <section className="seeGrades">
            <div className="seeGrades-evaluation">
                <h3>Cuestionario 1</h3>
                <img src={downArrow} alt="flecha hacia abajo" />
            </div>
            <div className="seeGrades-evaluation">
                <h3>Cuestionario 2</h3>
                <img src={downArrow} alt="flecha hacia abajo" />
            </div>
            <div className="seeGrades-evaluation">
                <h3>Cuestionario 3</h3>
                <img src={downArrow} alt="flecha hacia abajo" />
            </div>
            <Link className="buttonLink homePage-exitButton" to="/HomePage">Cancelar</Link> 
            
        </section>
    );
}

export {SeeGrades}