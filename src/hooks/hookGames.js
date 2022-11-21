import { useState } from "react";

export const HookGames = () => {
    const [games, setGames]= useState([]);
    const obtainGames= () => {
        fetch("http://localhost:3001/api/juegos")
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