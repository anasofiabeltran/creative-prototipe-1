import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const HookLogin = () => {

  const[isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const search = (nameLogin, password) => {fetch("http://localhost:3001/api/consultarDatosEstudiante/"+nameLogin+'/'+password)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        if(response){
          setIsLogin(true);
          navigate("/HomePage/Estudiante")
        }else{
          alert('contraseña o usuario incorrecto')
        }
    })}


    const searchTeacher = (nameLogin, password) => {fetch("http://localhost:3001/api/loginDocente/"+nameLogin+'/'+password)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
          if(response){
              setIsLogin(true);
              navigate("/HomePage/Docente")
          }else{
            alert('contraseña o usuario incorrecto')
          }
    })}

  return[isLogin,search,searchTeacher];
}