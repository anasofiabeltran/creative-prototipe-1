import React from "react";
import "./questionCss.css";

function Question(props){
    return(
        <section className="question">
            <h4>Pregunta {props.numero}</h4>
            <div className="question-view"></div>
        </section>
    );
}

export {Question};