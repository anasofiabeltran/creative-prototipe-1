import React, {useEffect, useState} from "react";
import { Link} from "react-router-dom";
import interactividad from "../../assets/img/interactividad.png";
import './playGameCss.css';
import { useParams } from 'react-router-dom';
import { HookGame } from '../../hooks/hookGame';




function PlayGame(){
    const [obtainGame,questions] = HookGame();
    const name = useParams();
    
    function showGrade(){
        console.log(document.getElementById('numberGrade').value)
    }

    useEffect(()=>{
        console.log('juego: ',name);
        obtainGame(name.game);          
    }, [])


    return(
        <section className="playGame">
            <Link className="buttonLink playGame-exitButton " to="/HomePage">Cancelar</Link> 
            <p>Nombre juego: {name.game}</p>
            <input id="numberGrade" value="0" readOnly/>
            <div className="playGame-interactivityImage"> 
                <img className="interactivityImage" src={interactividad} alt="interactividad juego"/>
            </div>
            {questions}
            <button onClick={showGrade}>Finalizar</button>
            
        </section>
    );
}

export {PlayGame};