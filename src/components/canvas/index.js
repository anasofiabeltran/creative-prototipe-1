import React from "react";
import "./canvasCss.css"

function Canvas(){
    return(
        <section className="canvas">
            <button>EDITAR</button>
            <div className="canvas-interactive_resourse">
                <textarea placeholder="Insertar:" className="inputQuestion" />
            </div>
            <div className="canvas-questions">
                <input className="input-singUp" placeholder="Respuesta 1"/>
                <input className="input-singUp" placeholder="Respuesta 2"/>
                <input className="input-singUp" placeholder="Respuesta 3"/>
            </div>
        </section>
    );
}

export {Canvas}