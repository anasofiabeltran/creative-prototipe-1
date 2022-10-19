import React from "react";
import './loginCss.css';
import {Link} from "react-router-dom";

function Login(){

    function login(){
        let selection = document.getElementById("login-options");
        if (selection.options[selection.selectedIndex].value == "estudiante"){
            alert('entro un estudiante')
        } else if (selection.options[selection.selectedIndex].value == "profesor"){
            alert('entro un profesor')
        }
    }

    return(
        <div className="Login">
            
            <form className="login-form">
                    <h3>Ingresar</h3>
                    <p>Tipo de usuario</p>
                    <select id="login-options" name= "select" className="login-form-select">
                        <option value="estudiante"> Estudiante</option>
                        <option value="profesor" defaultValue="profesor"> Profesor</option>
                    </select>
                    <label htmlFor="usuario">Cedula o TI</label>
                    <br />
                    <input className="input-singUp" type="number" id="usuario" name="usuario" />
                    <br />
                    <label htmlFor="contrasena">Contraseña</label>
                    <br />
                    <input className="input-singUp" type="text" id="contrasena" name="contrasena" />
                    <br />
                    <button type="button" onClick={login}>
                        <Link className="buttonLink" to="/HomePage">Ingresar</Link>
                    </button>
                    <button>
                        <Link className="buttonLink" to="/PrincipalPage">cancelar</Link>
                    </button>
            </form>
        </div>
    )
}

export {Login}