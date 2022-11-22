import React from "react";
import './loginCss.css';
import { Link} from "react-router-dom";
import { HookLogin } from '../../hooks/hookLogin';

function Login(){

    const [isLogin,search,searchTeacher] = HookLogin();

    let userName = " ", userPassword= " ",selection = "estudiante";

    const validateDataUserName= (event) => {
        userName= event.target.value
    }

    const validateDataPassword= (event) => {
        userPassword= event.target.value
    }

    const typeUser = (event) =>{
        selection= event.target.value
        console.log(selection)
    }


    function getAccess(){
        console.log(selection)
        if (selection == "estudiante"){

            search(userName,userPassword);

           
        } else if (selection== "profesor"){
            searchTeacher(userName,userPassword);
        }
    }

    return(
        <div className="Login">
            
            <form className="login-form">
                    <h3>Ingresar</h3>
                    <p>Tipo de usuario</p>
                    <select id="login-options" name= "select" className="login-form-select" onChange={typeUser}>
                        <option value="estudiante"> Estudiante</option>
                        <option value="profesor" defaultValue="profesor"> Profesor</option>
                    </select>
                    <label htmlFor="usuario">Cedula o TI</label>
                    <br />
                    <input className="input-singUp" type="number" id="usuario" name="usuario" onChange={validateDataUserName}/>
                    <br />
                    <label htmlFor="contrasena">Contraseña</label>
                    <br />
                    <input className="input-singUp" type="text" id="contrasena" name="contrasena" onChange={validateDataPassword} />
                    <br />
                    <button type="button" onClick={getAccess}>
                        Ingresar
                    </button>
                 
                    <Link className="buttonLink" to="/PrincipalPage">Cancelar</Link>
                   
            </form>
        </div>
    )
}

export {Login}