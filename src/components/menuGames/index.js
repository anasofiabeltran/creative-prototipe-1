import React,{ useEffect, useState } from "react";
import "../createGame/createGameCss.css"
import {Link} from "react-router-dom";
import fornite from "../../assets/img/fornite.png"
import { HookGames } from '../../hooks/hookGames';

function MenuGames(props){

    const [games,obtainGames] = HookGames();

    useEffect(()=>{
        obtainGames();
    }, [])


   
    

    return(
        <section className="createGameMenu">
            <div>
                <h3>Elija el juego</h3>
            </div>
            <div>
            {
                games.map(item => (
                    <div className="cardGame">
                        <img src={fornite} alt="preview del juego"/>
                        <div className="cardGame-game_information">
                            <h3>{item.nombre}</h3>
                            <p> Descripción del juego</p>
                            <Link className="buttonLink" to={'/PlayGame/'+item.nombre}>ELEGIR</Link>
                        </div>
                    </div>       
                ))
            }
            </div>
            <Link className="buttonLink" to="/HomePage">Cancelar</Link> 
        </section>
    );
    
}

export {MenuGames};