import React from "react";
import "../createGame/createGameCss.css";
import { Canvas } from "../canvas";
import {Question} from "../question";
import {Link} from "react-router-dom";

function TemplateGame(){

    return(
        <section className="createGame">
            
            <div className="space_Name">
                <input className="input-singUp" placeholder="Juego (nombre del juego)"/>
            </div>
            <div className="space_CreateQuestion">
                <div className="space_CreateQuestion-questions">
                    <Question />
                    <button> Añadir pregunta</button>
                </div>
                <hr />
                <div className="space_CreateQuestion-canvas">
                    <Canvas />
                </div>
            </div>
  
                <button>COMPARTIR</button>
                <button>GUARDAR</button>
                <button>PROBAR</button>
                <button>CANCELAR</button>
        
        </section>
    );
}

export {TemplateGame};