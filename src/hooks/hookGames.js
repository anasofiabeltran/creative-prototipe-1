import { useState } from "react";

export const HookGames = () => {
    const [games, setGames]= useState([]);
    const obtainGames= () => {
        fetch("https://creativebackend.herokuapp.com/api/juegos")
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('obteniendo Juegos: ', response);
            setGames(response);
        }
        );

    }
    return[ games, obtainGames];
  }