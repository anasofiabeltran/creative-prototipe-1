import React, {useEffect, useState} from "react";
import { Link} from "react-router-dom";
import interactividad from "../../assets/img/interactividad.png";
import './playGameCss.css';
import { useParams } from 'react-router-dom';
import { HookGame } from '../../hooks/hookGame';




function PlayGame(){
    const [obtainGame,questions] = HookGame();
    const {name} = useParams();
    

    useEffect(()=>{
        console.log('juego: ',name);
        obtainGame();          
    }, [])


    return(
        <section className="playGame">
            <Link className="buttonLink playGame-exitButton " to="/HomePage">Cancelar</Link> 
            <p>Nombre juego: {name}</p>
            <div className="playGame-interactivityImage"> 
                <img className="interactivityImage" src={interactividad} alt="interactividad juego"/>
            </div>
            {questions}
            
        </section>
    );
}

export {PlayGame};