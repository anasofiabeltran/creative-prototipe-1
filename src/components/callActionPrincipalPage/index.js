import React from "react";
import "./callActionPrincipalPageCSS.css";

function CallActionPrincipalPage(){
    return(
        <div className="callActionPrincipalPage">
            <section className="callActionPrincipalPage-form">
                    <label for="Nombre">Nombre</label>
                    <br />
                    <input className="input-singUp" type="text" id="Nombre" name="Nombre" />
                    <br />
                    <label for="Nombre">Correo</label>
                    <br />
                    <input className="input-singUp" type="text" id="Nombre" name="Nombre" />
                    <br />
                    <label for="Nombre">Tipo de plan</label>
                    <br />
                    <input className="input-singUp" type="text" id="Nombre" name="Nombre" />
                    <br />
                    <textarea placeholder="comentanos:" className="inputQuestion" />
                    
            </section>
            <button> Enviar</button>
        </div>
    );
}

export {CallActionPrincipalPage}