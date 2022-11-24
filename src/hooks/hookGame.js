import { useState } from "react";
import questionImage from "../assets/img/questionImage.png";
import interactividad from "../assets/img/interactividad.png";
import interactividad2 from "../assets/img/interactividad(2).png";
import interactividad3 from "../assets/img/interactividad(3).png";
import interactividad4 from "../assets/img/interactividad(4).png";
import interactividad5 from "../assets/img/interactividad(5).png";


export const HookGame = () => {
    const [questions, setQuestions]= useState([]);
    const [creator, setCreator]= useState("");
    

    function qualify(answere,item,boton1,boton2,boton3,nombreJuego){
        let life= JSON.parse(localStorage.getItem('lifeGamePlayed')).life    
        if (item.respuesta==answere){
            console.log('life: ',life)
            document.getElementById('numberGrade').value=parseInt(document.getElementById('numberGrade').value)+1
            if(life<5){
                localStorage['lifeGamePlayed'] = JSON.stringify({
                    "juego":nombreJuego,
                    "life":life+1
                });
            }
            if(life==5){
                document.getElementById('interactivityImage-img').src=interactividad
            }
            if(life==4){
                document.getElementById('interactivityImage-img').src=interactividad2
            }
            if(life==3){
                document.getElementById('interactivityImage-img').src=interactividad3
            }
            if(life==2){
                document.getElementById('interactivityImage-img').src=interactividad4
            }
            if(life==1){
                document.getElementById('interactivityImage-img').src=interactividad5
            }
            
        }else{
            console.log('life: ',life)
            if(life>1){
                localStorage['lifeGamePlayed'] = JSON.stringify({
                    "juego":nombreJuego,
                    "life":life-1
                });
            }
            if(life==5){
                document.getElementById('interactivityImage-img').src=interactividad2
            }
            if(life==4){
                document.getElementById('interactivityImage-img').src=interactividad3
            }
            if(life==3){
                document.getElementById('interactivityImage-img').src=interactividad4
            }
            if(life==2){
                document.getElementById('interactivityImage-img').src=interactividad5
            }
            if(life==1){
                document.getElementById('interactivityImage-img').src=interactividad5
            }
        }
        document.getElementById(boton1).disabled=true
        document.getElementById(boton2).disabled=true
        document.getElementById(boton3).disabled=true
    }

    const obtainGame= (nameGame) => {
        fetch("https://creativebackend.herokuapp.com/api/consultarDatosJuego", {
            method: 'POST',
            body: JSON.stringify({"gameName":nameGame}), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            localStorage['lifeGamePlayed'] = JSON.stringify({
                "juego":response.nombre,
                "life":5
            });
            console.log('obteniendo Juegos: ', response);
            setCreator(response.creator)
            setQuestions(response.preguntas.map(item =>(
                <div className="playGame-question_card">
                                <div className="playGame-question_card-statement">
                                    <p> numero de pregunta {item.numPregunta}</p>
                                    <p>pregunta: </p>
                                    <br></br>
                                    <p>{item.pregunta}</p>
                                    
                                </div>
                                <button id={item.numPregunta+'_0'} onClick={() => qualify(0,item,item.numPregunta+'_0',item.numPregunta+'_1',item.numPregunta+'_2',response.nombre)} >{item.posiblesRespuestas[0]}</button>
                                <button id={item.numPregunta+'_1'} onClick={() => qualify(1,item,item.numPregunta+'_0',item.numPregunta+'_1',item.numPregunta+'_2',response.nombre)}>{item.posiblesRespuestas[1]}</button>
                                <button id={item.numPregunta+'_2'}onClick={() => qualify(2,item,item.numPregunta+'_0',item.numPregunta+'_1',item.numPregunta+'_2',response.nombre)}>{item.posiblesRespuestas[2]}</button>
                </div>
            )))
            
            
        }
        );
    }



    return[obtainGame,questions,creator];
  }