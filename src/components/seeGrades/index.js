import React, {useEffect,useState} from "react";
import downArrow from "../../assets/img/downArrow.png";
import "./seeGradesCss.css"
import { Link} from "react-router-dom";
import { Modal } from '../modal';
import { UseModal } from '../../hooks/useModal';
import { HookGrades } from "../../hooks/hookGrades";

function SeeGrades(){
    const [isOpenModal1, openModal1, closeModal1] = UseModal(false);
    const [user, setUser] = useState("")
    const [tipeUser, setTipeUser] = useState("")
    const [grades] = HookGrades(user);

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')).nombre)
        setTipeUser(JSON.parse(localStorage.getItem('user')).tipo)       
    }, [])

    return(
        <section className="seeGrades">
            <div className="seeGrades-evaluation">
                <button className="buttonModal" onClick={openModal1}>
                    <h3>Usuario: {user}</h3>
                    <img src={downArrow} alt="flecha hacia abajo" />
                </button>
                <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                    <h3>Notas</h3>
                    {grades}
                </Modal>
            </div>
            <Link className="buttonLink homePage-exitButton" to={`/HomePage/${tipeUser}`}>Cancelar</Link> 
            
        </section>
    );
}

export {SeeGrades}