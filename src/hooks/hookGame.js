import { useState } from "react";
import questionImage from "../assets/img/questionImage.png";

export const HookGame = () => {
    const [questions, setQuestions]= useState([]);

    const obtainGame= () => {
        fetch("http://localhost:3001/api/juegos")
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('obteniendo Juegos: ', response);
            setQuestions(response[0].preguntas.map(item =>(
                <div className="playGame-question_card">
                                <div className="playGame-question_card-statement">
                                    <p> numero de pregunta {item.numPregunta}</p>
                                    <p>pregunta: </p>
                                    <br></br>
                                    <p>{item.pregunta}</p>
                                    <img className="questionImage" src={questionImage} alt="pregunta con imagen"/>
                                </div>
                                
                                <button>{item.posiblesRespuestas[0]}</button>
                                <button>{item.posiblesRespuestas[1]}</button>
                                <button>{item.posiblesRespuestas[2]}</button>
                </div>
            ))) 
        }
        );
    }


    return[obtainGame,questions];
  }