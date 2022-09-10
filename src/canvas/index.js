import React from "react";
import "./canvasCss.css"

function Canvas(){
    return(
        <section className="canvas">
            <button>EDITAR</button>
            <div className="canvas-interactive_resourse">
                
                <input placeholder="Insertar:"/>
            </div>
            <div className="canvas-questions">
                <input placeholder="Respuesta 1"/>
                <input placeholder="Respuesta 2"/>
                <input placeholder="Respuesta 3"/>
            </div>
        </section>
    );
}

export {Canvas}