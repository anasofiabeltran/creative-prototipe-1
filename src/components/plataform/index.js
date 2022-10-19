import React from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { CreateGame } from '../createGame';
import { PrincipalPage } from '../principalPage';
import { SingUp } from '../singUpEstudent';
import { TemplateGame } from '../templateGame';
import { HomePage } from '../homePage';
import { Header } from '../header';
import {SingUpMenu} from '../singUpMenu';
import {SeeGrades} from '../seeGrades';
import {PlayGame} from '../playGame';
import { DemoFirstGame } from "../demoFirstGame";
import { SingUpTeacher } from "../singUpTeacher";
import { Login } from "../login";

import './plataformCss.css'

import logo from '../../assets/img/logo.png'



function Plataform(){
    return(
        <section className="plataform">
            <Router>
            <Header logo={logo}/>
            <div className="plataform-menuBar">
                <nav className="plataform-menuBar-options">
                <ul>
                    <li>
                    <Link to="/SingUpMenu">Sing Up</Link>
                    </li>
                    <li>
                    <Link to="/loguearse">login</Link>
                    </li>
                </ul>
                </nav>

                
                <Routes>
                <Route path="/creative-prototipe-1" element={<PrincipalPage />}>
                </Route>{/*Esta ruta se utiliza para el prototipo.... */}
                <Route path="/" element={<PrincipalPage />}>
                </Route>
                <Route path="/PrincipalPage" element={<PrincipalPage />}>
                </Route>
                <Route path="/CreateGame" element={<CreateGame />}>
                </Route>
                <Route path="/singUpEstudent" element={<SingUp />}>
                </Route>
                <Route path="/singUpEstudent" element={<SingUp />}>
                </Route>
                <Route path="/CreateGame/Fornite" element={<TemplateGame />}>
                </Route>
                <Route path="/HomePage" element={<HomePage />}>
                </Route>
                <Route path="/SingUpMenu" element={<SingUpMenu />}>
                </Route>
                <Route path="/SeeGrades" element={<SeeGrades />}>
                </Route>
                <Route path="/PlayGame" element={<PlayGame />}>
                </Route>
                <Route path="/DemoFirstGame" element={<DemoFirstGame />}>
                </Route>
                <Route path="/registrarProfesor" element={<SingUpTeacher />}>
                </Route>
                <Route path="/loguearse" element={<Login />}>
                </Route>
                </Routes>
            </div>
            </Router>
        </section>
    );
}

export {Plataform};