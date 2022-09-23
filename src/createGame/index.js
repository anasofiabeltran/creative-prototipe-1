import React from "react";
import "./createGameCss.css"
import {Link} from "react-router-dom";
import fornite from "../assets/img/fornite.png"
function CreateGame(){
   
    return(
        <section className="createGameMenu">
            <div>
                <h3>TIPO DE JUEGO</h3>
            </div>
            <div>
                <div className="cardGame">
                    <img src={fornite} alt="preview del juego"/>
                    <div className="cardGame-game_information">
                        <h3>Fornite</h3>
                        <p> Descripción del juego</p>
                        <Link className="buttonLink" to="/CreateGame/Fornite">ELEGIR</Link>
                    </div>
                </div>
                {
                    /*
                    <div className="cardGame">
                    <img src={fornite} alt="preview del juego"/>
                    <div className="cardGame-game_information">
                        <h3>Zombie</h3>
                        <p> Descripción del juego</p>
                        <button> ELEGIR </button>
                    </div>
                </div>
                <div className="cardGame">
                    <img src={fornite} alt="preview del juego"/>
                    <div className="cardGame-game_information">
                        <h3>Ruleta</h3>
                        <p> Descripción del juego</p>
                        <button> ELEGIR </button>
                    </div>
                </div>
                    */
                }
                
            </div>
        </section>
    );
}

export {CreateGame};