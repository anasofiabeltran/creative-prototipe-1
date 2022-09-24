import React from "react";
import { Link} from "react-router-dom";
import './singUpEstudentCss.css'


function SingUp(){
    return(
        <div className="singUpEstudent">
            <form>
                <div className="singUpEstudent-firstPart">
                    <label for="Nombre">Nombre</label>
                    <br />
                    <input className="input-singUp" type="text" id="Nombre" name="Nombre" />
                    <br />
                    <label for="Celular">Celular</label>
                    <br />
                    <input className="input-singUp" type="number" id="Celular" name="Celular" />
                    <br />
                    <label for="Institucion">Institucion</label>
                    <br />
                    <input className="input-singUp" type="text" id="Institucion" name="Institucion" />
                </div>
                <div className="singUpEstudent-secondPart">
                    <label for="Apellido">Apellido</label>
                    <br />
                    <input className="input-singUp" type="text" id="Apellido" name="Apellido" />
                    <br />
                    <label for="Correo">Correo</label>
                    <br />
                    <input className="input-singUp" type="text" id="Correo" name="Correo" />
                    <br />
                    <label for="CorreoAcudiente">Correo Acudiente</label>
                    <br />
                    <input className="input-singUp" type="text" id="CorreoAcudiente" name="CorreoAcudiente" />
                </div>
                <div className="singUpEstudent-buttons">
                    <Link className="buttonLink" to="/HomePage">Registrar</Link>
                    <button>
                        Cancelar
                    </button>
                </div>
                
            </form>
        </div>
    );
}

export {SingUp};