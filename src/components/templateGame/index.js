import React, {useState} from "react";
import "../createGame/createGameCss.css";
import "./templateGameCss.css";
import { Canvas } from "../canvas";
import { Modal } from '../modal';
import { UseModal } from '../../hooks/useModal';
import { Link} from "react-router-dom";
import {createUser} from "../../utils/index";
import { NumberModal } from '../../hooks/numberModal';
import {Question} from "../question";

function TemplateGame(){

    const [isOpenModalCompartir, openModalCompartir, closeModalCompartir] = UseModal(false);
    
    /*nombrar juego */
    const [game, setGame] = useState();
    const changeName = (newName) =>{
        setGame(newName.target.value);
    }

    /*guardar juego*/
    
    function saveGame(){
        
        
        let newGame={
            "nombre": game,
            "creator":JSON.parse(localStorage.getItem('user')).nombre,
            "numPreguntas":1,
            "preguntas": []
        }
        console.log(newGame)

        
        fetch("https://creativebackend.herokuapp.com/api/consultarDatosJuego", {
            method: 'POST',
            body: JSON.stringify({"gameName":game}), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {

            if(response == null){
                createUser(newGame,'/crearJuego');
                document.getElementById("gameName").style.visibility = "hidden";
            }else{
                alert('juego ya ha sido creado...escoja otro nombre')
            }
        
        }
        );
 
    }

    /*cambiar pregunta */
    const [selectQuestion, setSelectQuestion]= useState(1);
    const [createdQuestions, setCreatedQuestions]= useState([]);

    async function obtainQuestions(){
        await fetch("https://creativebackend.herokuapp.com/api/consultarDatosJuego", {
            method: 'POST',
            body: JSON.stringify({"gameName":game}), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('obteniendo preguntas: ', response);
            setCreatedQuestions(response);
        }
        );

    }

    async function changeToOtherQuestion(n){
        await obtainQuestions();
        setSelectQuestion(n);
    }

   /*crear preview de las preguntas */
   async function createQuestion(){
        await obtainQuestions();
        setNumberQuestion(q => [...q,<div><Question numero={number+1}/> <button onClick={() => changeToOtherQuestion(number+1)}>Elegir preguna</button></div> ]);
        changeQuestion(number+1);
        setSelectQuestion(number+1);
        
    }

    
    const [number, changeQuestion] = useState(1); //preguntas creadas
    const [numberQuestions, setNumberQuestion] = useState([<div><Question numero={number}/> <button onClick={() => setSelectQuestion(1)}>Elegir preguna</button></div>]);
    
        
    return(
        <section className="createGame">
            <h3>nombre del juego:  {game}</h3>
            <div className="space_Name">
                <input id="gameName" className="input-singUp" placeholder="Juego (nombre del juego)" onChange={changeName} onBlur={saveGame}/>
            </div>
            <div className="space_CreateQuestion-questions">
                    {numberQuestions}
                    <button onClick={createQuestion}> Añadir pregunta</button>
            </div>
            <div className="space_CreateQuestion">
                <div className="space_CreateQuestion-canvas">
                    <Canvas gamename={game} selectedQuestion={selectQuestion} questions={createdQuestions}/>
                </div>
            </div>
 
                <Link className="buttonLink" to="/CreateGame">Cancelar</Link> 
        
        </section>
    );
}

export {TemplateGame};