import './App.css';
import { Header } from '../header';
import { CreateGame } from '../createGame';
import React from 'react';
import logo from '../assets/img/logo.png'

function App() {
  return (
    <React.Fragment>
      <Header logo={logo}/>
      <CreateGame />
    </React.Fragment>
  );
}

export default App;
