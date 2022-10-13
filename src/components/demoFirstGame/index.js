import React, {useState} from "react";
import { Link} from "react-router-dom";
import interactividad from '../../assets/img/interactividad.png';
import interactividad_less_live_1 from '../../assets/img/interactividad(2).png';
import interactividad_less_live_2 from '../../assets/img/interactividad(3).png';
import interactividad_less_live_3 from '../../assets/img/interactividad(4).png';
import interactividad_less_live_4 from '../../assets/img/interactividad(5).png';
import questionImage from '../../assets/img/questionImage.png'
import './demoFirstGameCss.css';

function DemoFirstGame(props){
    const [issues, setIssues] = useState(0);
    const [image, setImage] = useState(interactividad);

    function answerQuestion(option){
        if(option){
            setIssues(issues-1);
            switch (issues-1){
                case 0:
                    setImage(interactividad);
                    break;
                case 1:
                    setImage(interactividad_less_live_1);
                    break;
                case 2:
                    setImage(interactividad_less_live_2);
                    break;
                case 3:
                    setImage(interactividad_less_live_3);
                    break;
                case 4:
                    setImage(interactividad_less_live_4);
                    break;
            }  
        }else{
            setIssues(issues+1);
            switch (issues+1){
                case 1:
                    setImage(interactividad_less_live_1);
                    break;
                case 2:
                    setImage(interactividad_less_live_2);
                    break;
                case 3:
                    setImage(interactividad_less_live_3);
                    break;
                case 4:
                    setImage(interactividad_less_live_4);
                    break;
                
            }  
        }
    }


    return(
        <>
        <section className="demoFirstGame">
            <div className="demoFirstGame-content">
                <Link to="/PrincipalPage"> CANCELAR </Link>
                <img className="demoFirstGame-content-interactive" src={image} alt="imagen preview game"/>
                <div className="demoFirstGame-content-questions">
                    <div className="demoFirstGame-content-questions-img">
                        <img src={questionImage} alt="pregunta imagen" />
                    </div>
                    <button onClick={() => answerQuestion(false) } className="demoFirstGame-content-answer">Respuesta 1 este es el contenido de la respuesta 1</button>
                    <button onClick={() => answerQuestion(true) } className="demoFirstGame-content-answer">Respuesta 2</button>
                    <button onClick={() => answerQuestion(false) } className="demoFirstGame-content-answer">Respuesta 3</button>
                </div>
            </div>
        </section>
        </>
    );
}

export {DemoFirstGame};