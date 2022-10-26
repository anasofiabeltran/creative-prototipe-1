import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const HookLogin = () => {

  const[isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const search = (nameLogin, password) => {fetch("http://localhost:3001/api/consultarDatosEstudiante/"+nameLogin)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        if(response!=null){
            if(response.contrasena == password){
                setIsLogin(true);
                navigate("/HomePage")
            }
        
        }
    })}

  return[isLogin,search];
}