import { useState } from "react";
import questionImage from "../assets/img/questionImage.png";

export const HookGame = () => {
    const [questions, setQuestions]= useState([]);
    

    function qualify(answere,item,boton1,boton2,boton3){
            
        if (item.respuesta==answere){
            document.getElementById('numberGrade').value=parseInt(document.getElementById('numberGrade').value)+1
        }
        document.getElementById(boton1).disabled=true
        document.getElementById(boton2).disabled=true
        document.getElementById(boton3).disabled=true
    }

    const obtainGame= (nameGame) => {
        fetch("http://localhost:3001/api/consultarDatosJuego", {
            method: 'POST',
            body: JSON.stringify({"gameName":nameGame}), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
        
            console.log('obteniendo Juegos: ', response);
            setQuestions(response.preguntas.map(item =>(
                <div className="playGame-question_card">
                                <div className="playGame-question_card-statement">
                                    <p> numero de pregunta {item.numPregunta}</p>
                                    <p>pregunta: </p>
                                    <br></br>
                                    <p>{item.pregunta}</p>
                                    
                                </div>
                                <button id={item.numPregunta+'_0'} onClick={() => qualify(0,item,item.numPregunta+'_0',item.numPregunta+'_1',item.numPregunta+'_2')} >{item.posiblesRespuestas[0]}</button>
                                <button id={item.numPregunta+'_1'} onClick={() => qualify(1,item,item.numPregunta+'_0',item.numPregunta+'_1',item.numPregunta+'_2')}>{item.posiblesRespuestas[1]}</button>
                                <button id={item.numPregunta+'_2'}onClick={() => qualify(2,item,item.numPregunta+'_0',item.numPregunta+'_1',item.numPregunta+'_2')}>{item.posiblesRespuestas[2]}</button>
                </div>
            )))
            
            
        }
        );
    }



    return[obtainGame,questions];
  }