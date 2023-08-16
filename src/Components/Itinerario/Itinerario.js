import React from "react";
import "./Itinerario.css";

const Itinerario = () => {
  return (
    <div className="container">
      <div className="title-itinerario">
        <span>Itinerario</span>
      </div>
      <div className="itinerario-container">
        <div className="itinerario-ceremonia">
          <h1>CEREMONIA</h1>
          <h3>Iglesia Nuestra Señora de Lourdes</h3>
          <h3>Carrera 7 # 72 - 45</h3>
          <h3>Bogotá</h3>
          <h3>3:30 pm</h3>
          <a
            href="https://www.google.com/maps/place/Cra+70G+%2379-78,+Bogot%C3%A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAPA
          </a>
        </div>
        <div className="itinerario-recepcion">
          <h1>RECEPCIÓN</h1>
          <h3>Hacienda Los Sauces</h3>
          <h3>Carrera 74a # 74 - 16</h3>
          <h3>Bogotá</h3>
          <h3>6:00 pm</h3>
          <a
            href="https://www.google.com/maps/place/Cra.+74a+%2374-16,+Bogot%C3%A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAPA
          </a>
        </div>
      </div>
    </div>
  );
};

export default Itinerario;
