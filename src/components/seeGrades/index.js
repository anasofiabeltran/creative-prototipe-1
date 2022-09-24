import React from "react";
import downArrow from "../../assets/img/downArrow.png";
import "./seeGradesCss.css"
import { Link} from "react-router-dom";
import { Modal } from '../modal';
import { UseModal } from '../../hooks/useModal';
function SeeGrades(){
    const [isOpenModal1, openModal1, closeModal1] = UseModal(false);
    return(
        <section className="seeGrades">
            <div className="seeGrades-evaluation">
                <button className="buttonModal" onClick={openModal1}>
                    <h3>Cuestionario 1</h3>
                    <img src={downArrow} alt="flecha hacia abajo" />
                </button>
                <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                    <h3>Modal 1</h3>
                    <p>Hola este es el contenido de mi modal 1</p>
                </Modal>
            </div>
            
            <Link className="buttonLink homePage-exitButton" to="/HomePage">Cancelar</Link> 
            
        </section>
    );
}

export {SeeGrades}