import React from "react";
import './menuDemoCss.css'
import fornite from '../../assets/img/fornite.png';
import { Link} from "react-router-dom";

function MenuDemo(){
    return(
        <div className="MenuOptionsDemo">
            <h3 className="MenuOptionsDemo-title">PLAY DEMO</h3>
            <section className="MenuDemo">
            <div className="MenuDemo-Opction">
                <Link to="/DemoFirstGame"> 
                <img src={fornite} alt="fornite" />
                <h4>Descripcion del juego</h4>
                <p>Datos del juego</p>
                </Link>
            </div>
          
        </section>
        </div>
        
    );
}

export {MenuDemo};