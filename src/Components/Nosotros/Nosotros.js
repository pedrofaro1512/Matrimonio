import React from "react";
import "./Nosotros.css";
import imagen01 from "../../asstes/img/imagen01.jpg";

const Nosotros = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>NOSOTROS</h1>
      </div>
      <div className="nosotros-container">
        <div className="nosotros-text">
          <p>
            La pareja se casa para celebrar su profundo amor y conexión, que ha
            crecido a través de risas, apoyo y aceptación mutua. Su matrimonio
            representa un compromiso para construir un futuro juntos,
            enfrentando la vida con amor y complicidad, sabiendo que su unión es
            el camino hacia una eternidad de felicidad.
          </p>
          <p>
            La pareja se casa para celebrar su profundo amor y conexión, que ha
            crecido a través de risas, apoyo y aceptación mutua. Su matrimonio
            representa un compromiso para construir un futuro juntos,
            enfrentando la vida con amor y complicidad, sabiendo que su unión es
            el camino hacia una eternidad de felicidad.
          </p>
          <p>
            La pareja se casa para celebrar su profundo amor y conexión, que ha
            crecido a través de risas, apoyo y aceptación mutua. Su matrimonio
            representa un compromiso para construir un futuro juntos,
            enfrentando la vida con amor y complicidad, sabiendo que su unión es
            el camino hacia una eternidad de felicidad.
          </p>
        </div>
        <div className="nosotros-image">
          <img src={imagen01} alt="imagen01" />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
