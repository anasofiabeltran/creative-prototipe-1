import "./questionCss.css";

export const Question = ({numero,selectOtherQuestion}) =>{
    return(
        <section className="question">
            <h4>Pregunta {numero}</h4>
            <div className="question-view"></div>
        </section>
    );
}
