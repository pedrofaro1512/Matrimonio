import React from "react";
import compromiso from "../../asstes/img/compromiso.jpg";
import cita from "../../asstes/img/cita.jpg";
import viaje from "../../asstes/img/viaje.jpg";
import imagen04 from "../../asstes/img/imagen04.jpg";
import imagen05 from "../../asstes/img/imagen05.jpg";

import "./Rueda.css";

const Rueda = () => {
  return (
    <div className="body-moments">
      <div className="title-momentos">
        <h1>NUESTROS MOMENTOS</h1>
      </div>
      <div className="container-moments">
        <div className="card">
          <div className="box">
            <div className="imgMoments">
              <img src={imagen04} alt="imagen01"></img>
            </div>
            <div className="content">
              <div>
                <h2>Nos conocimos</h2>
                <p>
                  Nos conocimos en una entrevista de trabajo donde nos flechamos
                  de inmediato...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgMoments">
              <img src={cita} alt="cita"></img>
            </div>
            <div className="content">
              <div>
                <h2>Nuestra primera cita</h2>
                <p>Fue en un café muy acogedor con flores y poca luz.....</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgMoments">
              <img src={imagen05} alt="imagen02"></img>
            </div>
            <div className="content">
              <div>
                <h2>Nuestro primer beso</h2>
                <p>
                  Fue en un café super lindo lleno de aromas y sabores
                  exóticos....
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgMoments">
              <img src={imagen04} alt="imagen03"></img>
            </div>
            <div className="content">
              <div>
                <h2>Nos hicimos novios</h2>
                <p>
                  Fue magico, era como un cuento de adas en un bosque
                  encantado.....
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgMoments">
              <img src={viaje} alt="viaje"></img>
            </div>
            <div className="content">
              <div>
                <h2>Nuestro primer viaje juntos</h2>
                <p>
                  Fue a un valle encantado lleno de flores, árboles altos y
                  frondosos.....
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgMoments">
              <img src={compromiso} alt="compromiso"></img>
            </div>
            <div className="content">
              <div>
                <h2>Pedida de mano</h2>
                <p>
                  Fue en la candelaria, muy romantico, con velas y rosas, algo
                  de vino y buena comida.....
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgMoments">
              <img src={imagen05} alt="imagen02"></img>
            </div>
            <div className="content">
              <div>
                <h2>Matrimonio</h2>
                <p>
                  Bueno, aca estamos con la invitación, anunciando nuestra unión
                  por toda la vida....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rueda;
