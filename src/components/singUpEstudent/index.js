import React, {useEffect,useState} from "react";
import './singUpEstudentCss.css'
import {createUser,getEstudents} from "../../utils/index"
import {Link} from "react-router-dom";


function SingUp(){
    const [user, setUser] = useState({ });
    const [tipeUser, setTipeUser] = useState("")

    useEffect(()=>{
        setTipeUser(JSON.parse(localStorage.getItem('user')).tipo)       
    }, [])

    function singUp() {

        const userName= document.getElementById("Nombre").value;
        const userLastname= document.getElementById("Apellido").value;
        const Institucion= document.getElementById("Institucion").value;
        const numPhone= document.getElementById("Celular").value;
        const email= document.getElementById("Correo").value;
        const parentEmail= document.getElementById("CorreoAcudiente").value;
        const password= document.getElementById("Password").value;
        const targetaId= document.getElementById("targetaId").value;

        setUser(
            {
                "nombre": userName,
                "celular":numPhone,
                "institucion":Institucion,
                "apellido":userLastname,
                "correo":email,
                "correoAcudiente":parentEmail,
                "contrasena":password,
                "targetaId": targetaId
            }
        )

        createUser(user,'/registrarEstudiante');
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
                    <label htmlFor="CorreoAcudiente">Correo Acudiente</label>
                    <br />
                    <input className="input-singUp" type="text" id="CorreoAcudiente" name="CorreoAcudiente" />
                </div>
                <div className="singUpEstudent-secondPart">
                    <label htmlFor="Password">Contraseña</label>
                    <br />
                    <input className="input-singUp" type="text" id="Password" name="Password" />
                    <br />
                    <label htmlFor="targetaId">Targeta Id o CC</label>
                    <br />
                    <input className="input-singUp" type="number" id="targetaId" name="targetaId" />
                </div>
                <div className="singUpEstudent-buttons">
                    {/*<Link className="buttonLink" to="/HomePage">Registrar</Link>*/}
                    
                    <button type="button" onClick={singUp}>
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

export {SingUp};