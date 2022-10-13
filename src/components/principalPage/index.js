import React from "react";
import { Link} from "react-router-dom";
import beneficios from '../../assets/img/beneficios.png';
import play from '../../assets/img/demo.png';
import { CallActionPrincipalPage } from "../callActionPrincipalPage";
import title from '../../assets/img/creativeTitle.png';
import './principalPageCss.css';
import { MenuDemo } from "../menuDemo";

function PrincipalPage(){
    return(
    <section className="principalPage">
      <div>
      <img className="titleCreative" src={title} />
      <MenuDemo />
      {/* <img className="demo" src={play} alt="demo"/>*/}
      </div>
      <div>
        <img className="principalPage-benefits_table" src={beneficios} alt="tabla de beneficios"/>
      </div>
      <div>
        <CallActionPrincipalPage />
      </div>
    </section>
    );
}

export {PrincipalPage}