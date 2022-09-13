import React from "react";
import { Link} from "react-router-dom";
import interactividad from "../assets/img/interactividad.png";
import questionImage from "../assets/img/questionImage.png";
import './playGameCss.css';

function PlayGame(){
    return(
        <section className="playGame">
            <Link className="buttonLink playGame-exitButton " to="/HomePage">Cancelar</Link> 
            <div className="playGame-interactivityImage"> 
                <img className="interactivityImage" src={interactividad} alt="interactividad juego"/>
            </div>
            <div className="playGame-question_card">
                <div className="playGame-question_card-statement">
                    <p>PREGUNTA</p>
                    <img className="questionImage" src={questionImage} alt="pregunta con imagen"/>
                </div>
                
                <button>Respuesta 1</button>
                <button>Respuesta 2</button>
                <button>Respuesta 3</button>
            </div>
        </section>
    );
}

export {PlayGame};