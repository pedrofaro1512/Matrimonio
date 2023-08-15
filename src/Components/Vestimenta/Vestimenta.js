import React from "react";
import "./Vestimenta.css";
import hombres from "../../asstes/img/hombres.svg";
import mujeres from "../../asstes/img/mujeres.svg";

const Vestimenta = () => {
  return (
    <div className="container">
      <div className="title-vestimenta">
        <h1>CÓDIGO DE VESTIMENTA</h1>
      </div>
      <div className="vestimenta-container">
        <a
          href="https://co.pinterest.com/xiolar/trajes-para-boda-de-hombre/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="imagen">
            <img src={hombres} alt="Hombres" className="hombres" />
          </div>
        </a>
        <a
          href="https://www.pinterest.es/bodaclick/vestidos-invitadas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="imagen">
            <img src={mujeres} alt="Mujeres" className="hombres" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Vestimenta;
