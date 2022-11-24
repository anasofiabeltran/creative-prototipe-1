import {createUser} from "../../utils/index"
import React, {useEffect,useState} from "react";
import '../singUpEstudent/singUpEstudentCss.css'
import {Link} from "react-router-dom";


function SingUpTeacher(){
    const [user, setUser] = useState({ });
    const [tipeUser, setTipeUser] = useState("")

    useEffect(()=>{
        setTipeUser(JSON.parse(localStorage.getItem('user')).tipo)       
    }, [])

    function singUpTeacher() {

        const userName= document.getElementById("Nombre").value;
        const userLastname= document.getElementById("Apellido").value;
        const Institucion= document.getElementById("Institucion").value;
        const numPhone= document.getElementById("Celular").value;
        const email= document.getElementById("Correo").value;
        const cargo= document.getElementById("Cargo").value;
        const password= document.getElementById("Password").value;
        const cedula= document.getElementById("Cedula").value;

        setUser(
            {
                "nombre": userName,
                "celular":numPhone,
                "institucion":Institucion,
                "apellido":userLastname,
                "correo":email,
                "cargo":cargo,
                "contrasena":password,
                "cedula": cedula
            }
        )
        createUser(user,'/registrarProfesor');
    }
    return(
        <div className="singUpEstudent">
            <form>
                <div className="singUpEstudent-firstPart">
                    <label htmlFor="Nombre">Nombre</label>
                    <br />
                    <input className="input-singUp" type="text" id="Nombre" name="Nombre" />
                    <br />
                    <label htmlFor="Apellido">Apellido</label>
                    <br />
                    <input className="input-singUp" type="text" id="Apellido" name="Apellido" />
                    <br />
                    <label htmlFor="Institucion">Institucion</label>
                    <br />
                    <input className="input-singUp" type="text" id="Institucion" name="Institucion" />
                </div>
                <div className="singUpEstudent-secondPart">
                    <label htmlFor="Celular">Celular</label>
                    <br />
                    <input className="input-singUp" type="number" id="Celular" name="Celular" />
                    <br />
                    <label htmlFor="Correo">Correo</label>
                    <br />
                    <input className="input-singUp" type="text" id="Correo" name="Correo" />
                    <br />
                    <label htmlFor="Cargo">Materia dictada - Cargo</label>
                    <br />
                    <input className="input-singUp" type="text" id="Cargo" name="Cargo" />
                </div>
                <div className="singUpEstudent-secondPart">
                    <label htmlFor="Password">Contraseña</label>
                    <br />
                    <input className="input-singUp" type="text" id="Password" name="Password" />
                    <br />
                    <label htmlFor="Cedula">Cedula</label>
                    <br />
                    <input className="input-singUp" type="number" id="Cedula" name="Cedula" />
                </div>
                <div className="singUpEstudent-buttons">
                    {/*<Link className="buttonLink" to="/HomePage">Registrar</Link>*/}
                    
                    <button type="button" onClick={singUpTeacher}>
                        <Link className="buttonLink" to={`/HomePage/${tipeUser}`}>Registrar</Link> 
                    </button>
                    <button>
                        <Link className="buttonLink" to="/PrincipalPage">cancelar</Link>
                    </button>
                </div>
                
            </form>
        </div>
    );
}


export {SingUpTeacher};