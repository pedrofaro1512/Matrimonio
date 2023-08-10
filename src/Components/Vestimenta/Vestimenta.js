import React from "react";
import "./Vestimenta.css";
import pareja from "../../asstes/img/pareja.svg";

const Vestimenta = () => {
  return (
    <div className="container">
      <div className="title-vestimenta">
        <h1>CÓDIGO DE VESTIMENTA</h1>
      </div>
      <div className="vestimenta-container">
        <div className="box-container">
          <div className="vertical">
            <h1>Hombres</h1>
          </div>
          <h2>Formal</h2>
        </div>
        <div className="imagen">
          <img src={pareja} alt="Pareja" className="pareja" />
        </div>
        <div className="box-container">
          <div className="vertical">
            <h1>Mujeres</h1>
          </div>
          <h2>Formal</h2>
        </div>
      </div>
    </div>
  );
};

export default Vestimenta;
