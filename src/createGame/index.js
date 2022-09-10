import React from "react";
import "./createGameCss.css"
import { Canvas } from "../canvas";
import {Question} from "../question";
function CreateGame(){
    return(
        <section className="createGame">
            
            <div className="space_Name">
                <input placeholder="Juego (nombre del juego)"/>
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

export {CreateGame};