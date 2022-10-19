import React, {useState} from "react";
import "../createGame/createGameCss.css";
import "./templateGameCss.css";
import { Canvas } from "../canvas";
import { Modal } from '../modal';
import { UseModal } from '../../hooks/useModal';
import { Link} from "react-router-dom";
import {createUser} from "../../utils/index"

function TemplateGame(){

    const [isOpenModalCompartir, openModalCompartir, closeModalCompartir] = UseModal(false);
    

    /*guardar juego*/
    const [game, setGame] = useState({ });
    function saveGame(){
        const gameName = document.getElementById("gameName").value;
        let newGame={
            "nombre": gameName,
            "numPreguntas":1,
            "preguntas": []
        }
        
        fetch("http://localhost:3001/api/consultarDatosJuego", {
            method: 'POST',
            body: JSON.stringify({gameName}), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            if(response == null){
                setGame( newGame  );
                createUser(newGame,'/crearJuego');
            }else{
                alert('juego ya ha sido creado...escoja otro nombre')
            }
        }
        );
        
    }

   

        
    

    return(
        <section className="createGame">
            
            <div className="space_Name">
                <input id="gameName" className="input-singUp" placeholder="Juego (nombre del juego)"/>
            </div>
            <div className="space_CreateQuestion">
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
                <button onClick={saveGame}>GUARDAR</button>
                <Link className="buttonLink" to="/CreateGame">Cancelar</Link> 
        
        </section>
    );
}

export {TemplateGame};