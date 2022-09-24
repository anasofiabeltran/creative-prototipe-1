import React, {useState} from "react";
import "../createGame/createGameCss.css";
import { Canvas } from "../canvas";
import {Question} from "../question";
import { Modal } from '../modal';
import { UseModal } from '../../hooks/useModal';
import { Link} from "react-router-dom";

function TemplateGame(){

    function createQuestion(){
        setNumberQuestion(question => [...question,<Question numero={number+1}/> ]);
        setNumber(number+1);
    }
    const [isOpenModalCompartir, openModalCompartir, closeModalCompartir] = UseModal(false);
    const [number, setNumber] = useState(1);
    const [numberQuestions, setNumberQuestion] = useState([<Question numero={number}/>]);
    return(
        <section className="createGame">
            
            <div className="space_Name">
                <input className="input-singUp" placeholder="Juego (nombre del juego)"/>
            </div>
            <div className="space_CreateQuestion">
                <div className="space_CreateQuestion-questions">
                    {numberQuestions}
                    <button onClick={createQuestion}> Añadir pregunta</button>
                </div>
                <hr />
                <div className="space_CreateQuestion-canvas">
                    <Canvas />
                </div>
            </div>
                <button className="buttonModal" onClick={openModalCompartir}>
                COMPARTIR
                </button>
                <Modal isOpen={isOpenModalCompartir} closeModal={closeModalCompartir}>
                    <h3>Compartir con</h3>
                    <input placeholder="compartir con..." />
                    <button>Enviar</button>
                </Modal>
                <button>GUARDAR</button>
                <Link className="buttonLink" to="/CreateGame">Cancelar</Link> 
        
        </section>
    );
}

export {TemplateGame};