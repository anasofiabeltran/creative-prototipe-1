import { useState } from "react";

export const HookGrades = (responder) =>{
    const [grade,setGrade] = useState([])

    fetch("https://creativebackend.herokuapp.com/api/consultarCalificaciones", {
        method: 'POST',
        body: JSON.stringify({"responder":responder}), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        if( response != null){
            setGrade(response.map(item =>(<div>{item.test} : {item.grade}</div>)))
        }
    }
    );
    
    return[grade];
}