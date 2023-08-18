import React from "react";
import { Layout } from "antd";
import Letras from "../../asstes/img/InicialesB.png";

import "./Footer.css";

const { Footer } = Layout;

const FooterM = () => {
  return (
    <Footer className="footer">
      <h1 className="title-footer">Contáctanos</h1>
      <div className="letrasF">
        <img src={Letras} alt="Letras"></img>
      </div>
      <div className="footer-content">
        <div>
          <h2>Natalia Cortes</h2>
          <h3>Celulear: 310 3013196</h3>
        </div>
        <div>
          <h2>Felipe Rodriguéz</h2>
          <h3>Celular: 305 3934622</h3>
        </div>
      </div>
    </Footer>
  );
};

export default FooterM;
