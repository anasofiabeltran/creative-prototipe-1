import React, {useState} from "react";
import "./canvasCss.css";
import {addGameQuestion} from "../../utils/index";
import {Question} from "../question";


function Canvas(props){
    let questions=[]


    /*anadir pregunta */
    function addQuestion(){
        const question = document.getElementById("question");
        const answere1 = document.getElementById("answere-1").value;
        const answere2 = document.getElementById("answere-2").value;
        const answere3 = document.getElementById("answere-3").value;

        const newQuestion = 
        {"nameGame":"ana",
        "question": {"numPregunta":3,
        "pregunta":question,
        "respuesta":1,
        "posiblesRespuestas":[answere1,answere2,answere3]}}
        


        addGameQuestion(newQuestion,"/cambiarJuego/crearPregunta");
        questions.push(newQuestion);
    }

    /*cambiar pregunta */
    function changeQuestion(question){
        console.log(questions[props.numQuestion]);
    }

    /*crear preview de las preguntas */
    function createQuestion(){
        setNumberQuestion(question => [...question,<Question numero={number+1}/> ]);
        setNumber(number+1);
    }

    const [number, setNumber] = useState(1);
    const [numberQuestions, setNumberQuestion] = useState([<Question numero={number}/>]);


    return(
        <section className="canvas">
            <div className="space_CreateQuestion-questions">
                    {numberQuestions}
                    <button onClick={createQuestion}> Añadir pregunta</button>
            </div>
            <br />
            <hr />
            <br />
            <button onClick={addQuestion}>EDITAR</button>
            <br />
            <p> numero de pregunta: {number}</p>
            <div className="canvas-interactive_resourse">
                <textarea id="question" placeholder="Insertar:" className="inputQuestion" />
            </div>
            <div className="canvas-questions">
                <input id="answere-1" className="input-singUp" placeholder="Respuesta 1"/>
                <input id="answere-2" className="input-singUp" placeholder="Respuesta 2"/>
                <input id="answere-3" className="input-singUp" placeholder="Respuesta 3"/>
            </div>
        </section>
    );
}

export {Canvas}