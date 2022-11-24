import React, {useEffect, useState} from "react";
import { Link} from "react-router-dom";
import interactividad from "../../assets/img/interactividad.png";
import './playGameCss.css';
import { useParams } from 'react-router-dom';
import { HookGame } from '../../hooks/hookGame';
import {qualifyActivity} from "../../utils/index"


function PlayGame(){
    const [obtainGame,questions,creator] = HookGame();
    const name = useParams();
    const [user,setUser] = useState({})
    function showGrade(){
        qualifyActivity({"grade": (document.getElementById('numberGrade').value*5)/questions.length,"creator":creator,"responder":user.nombre,"test": name.game})
    }

    useEffect(()=>{
        console.log('juego: ',name);
        obtainGame(name.game);
        setUser(JSON.parse(localStorage.getItem('user')))      
    }, [])


    return(
        <section className="playGame">
            <Link className="buttonLink playGame-exitButton " to="/HomePage">Cancelar</Link> 
            <p>Nombre juego: {name.game}</p>
            <input id="numberGrade" value="0" readOnly/>
            <div className="playGame-interactivityImage"> 
                <img id="interactivityImage-img" className="interactivityImage" src={interactividad} alt="interactividad juego"/>
            </div>
            {questions}
            <button onClick={showGrade}>Finalizar</button>
            
        </section>
    );
}

export {PlayGame};