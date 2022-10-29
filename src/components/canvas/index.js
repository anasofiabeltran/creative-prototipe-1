import React, {useState} from "react";
import "./canvasCss.css";
import {addGameQuestion} from "../../utils/index";



function Canvas(props){


    /*anadir pregunta */
    function addQuestion(){
        const textQuestion = document.getElementById("statementQuestion").value;
        const answere1 = document.getElementById("answere-1").value;
        const answere2 = document.getElementById("answere-2").value;
        const answere3 = document.getElementById("answere-3").value;

        const newQuestion = 
        {"question": {"numPregunta":props.selectedQuestion,"pregunta":textQuestion,"respuesta":1,"posiblesRespuestas":[answere1,answere2,answere3]}}
        

        
        addGameQuestion(newQuestion,"/cambiarJuego/crearPregunta/"+props.gamename);

    }


    console.log('pregunta elegida para resolver: ', props.selectedQuestion, props.questions)
    if (props.questions != null && props.questions.length != 0){
        if (props.questions.preguntas[props.selectedQuestion-1] != undefined ){
            return(
                <section className="canvas">
                    <p> pregunta seleccionada {props.selectedQuestion}</p>
                    <button onClick={addQuestion}>EDITAR</button>
                    <br />
                    <div className="canvas-interactive_resourse">
                        <textarea id="statementQuestion" value={props.questions.preguntas[props.selectedQuestion-1].pregunta} className="inputQuestion" />
                    </div>
                    <div className="canvas-questions">
                        <input id="answere-1" className="input-singUp" value={props.questions.preguntas[props.selectedQuestion-1].posiblesRespuestas[0] }/>
                        <input id="answere-2" className="input-singUp" value={props.questions.preguntas[props.selectedQuestion-1].posiblesRespuestas[1] }/>
                        <input id="answere-3" className="input-singUp" value={props.questions.preguntas[props.selectedQuestion-1].posiblesRespuestas[2]}/>
                    </div>
                </section>
            );    
        }
    }
        return(
            <section className="canvas">
                <p> pregunta seleccionada {props.selectedQuestion}</p>
                <button onClick={addQuestion}>EDITAR</button>
                <br />
                <div className="canvas-interactive_resourse">
                    <textarea id="statementQuestion" placeholder="Insertar:" className="inputQuestion" />
                </div>
                <div className="canvas-questions">
                    <input id="answere-1" className="input-singUp" placeholder="respuesta 1"/>
                    <input id="answere-2" className="input-singUp" placeholder="respuesta 2"/>
                    <input id="answere-3" className="input-singUp" placeholder="respuesta 3"/>
                </div>
            </section>
        );    
    
}

export {Canvas}