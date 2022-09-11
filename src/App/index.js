import './App.css';
import { Header } from '../header';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { CreateGame } from '../createGame';
import { PrincipalPage } from '../principalPage';
import { SingUp } from '../singUpEstudent';
import React from 'react';
import logo from '../assets/img/logo.png'

function App() {
  return (
    <React.Fragment>
      <Header logo={logo}/>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/PrincipalPage">Home</Link>
            </li>
            <li>
              <Link to="/CreateGame">Crear Juego</Link>
            </li>
            <li>
              <Link to="/singUpEstudent">Sing Up</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<PrincipalPage />}>
          </Route>
          <Route path="/PrincipalPage" element={<PrincipalPage />}>
          </Route>
          <Route path="/CreateGame" element={<CreateGame />}>
          </Route>
          <Route path="/singUpEstudent" element={<SingUp />}>
          </Route>
        </Routes>
      </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
