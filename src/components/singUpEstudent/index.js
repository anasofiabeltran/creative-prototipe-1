import React, {useState} from "react";
import { Link} from "react-router-dom";
import './singUpEstudentCss.css'


function SingUp(){
    const [user, setUser] =useState({
        /*"nombre": "carmen","contrasena": "1234"*/
      });


    function singUp() {

        const userName= document.getElementById("Nombre").value;
        const userLastname= document.getElementById("Apellido").value;
        const Institucion= document.getElementById("Institucion").value;
        const numPhone= document.getElementById("Celular").value;
        const email= document.getElementById("Correo").value;
        const parentEmail= document.getElementById("CorreoAcudiente").value;
        const password= document.getElementById("Password").value;
        const nickname= document.getElementById("Nickname").value;

        setUser(
            {
                "nombre": userName,
                "apellido":userLastname,
                "nombreColegio":Institucion,
                "numeroTelefonico":numPhone,
                "correoEstudiante":email,
                "correoAcudiente":parentEmail,
                "contrsena":password,
                "nombreUsuario": nickname
            }
        )
        console.log(user);
        /*
        fetch('http://localhost:3001/api/notes ', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          
          .then(response => console.log('Success:', response));
        
        fetch('http://localhost:3001/api/notes').
        then(data => data.json()).
        then(res => {
            console.log(res);
            alert(res);
            
        })
       */
    }
    return(
        <div className="singUpEstudent">
            <form>
                <div className="singUpEstudent-firstPart">
                    <label for="Nombre">Nombre</label>
                    <br />
                    <input className="input-singUp" type="text" id="Nombre" name="Nombre" />
                    <br />
                    <label for="Apellido">Apellido</label>
                    <br />
                    <input className="input-singUp" type="text" id="Apellido" name="Apellido" />
                    <br />
                    <label for="Institucion">Institucion</label>
                    <br />
                    <input className="input-singUp" type="text" id="Institucion" name="Institucion" />
                </div>
                <div className="singUpEstudent-secondPart">
                    <label for="Celular">Celular</label>
                    <br />
                    <input className="input-singUp" type="number" id="Celular" name="Celular" />
                    <br />
                    <label for="Correo">Correo</label>
                    <br />
                    <input className="input-singUp" type="text" id="Correo" name="Correo" />
                    <br />
                    <label for="CorreoAcudiente">Correo Acudiente</label>
                    <br />
                    <input className="input-singUp" type="text" id="CorreoAcudiente" name="CorreoAcudiente" />
                </div>
                <div className="singUpEstudent-secondPart">
                    <label for="Password">Contraseña</label>
                    <br />
                    <input className="input-singUp" type="text" id="Password" name="Password" />
                    <br />
                    <label for="Nickname">Nombre de usuario</label>
                    <br />
                    <input className="input-singUp" type="text" id="Nickname" name="Nickname" />
                </div>
                <div className="singUpEstudent-buttons">
                    {/*<Link className="buttonLink" to="/HomePage">Registrar</Link>*/}
                    <button type="button" onClick={singUp}>
                        Registrar
                    </button>
                    <button>
                        Cancelar
                    </button>
                </div>
                
            </form>
        </div>
    );
}

export {SingUp};