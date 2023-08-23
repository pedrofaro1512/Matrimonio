import React from "react";
import "./Vestimenta.css";
import suit from "../../asstes/img/suit.png";
import dress from "../../asstes/img/dress.png";

const Vestimenta = () => {
  return (
    <div className="container-vestimenta">
      <div className="title-vestimenta">
        <span>Código de vestimenta</span>
      </div>
      <div className="vestimenta-container">
        <a
          href="https://co.pinterest.com/xiolar/trajes-para-boda-de-hombre/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="imagen">
            <img src={suit} alt="Hombres" className="hombres" />
          </div>
        </a>
        <a
          href="https://www.pinterest.es/bodaclick/vestidos-invitadas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="imagen">
            <img src={dress} alt="Mujeres" className="hombres" />
          </div>
        </a>
      </div>
      <h3 className="text-help">Click en la imagen para sugerencias</h3>
    </div>
  );
};

export default Vestimenta;
