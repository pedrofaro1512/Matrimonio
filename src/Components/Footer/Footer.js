import React from "react";
import { Layout } from "antd";
import "./Footer.css";

const { Footer } = Layout;

const FooterM = () => {
  return (
    <Footer className="footer">
      <h1 className="title-footer">Contáctanos</h1>
      <div className="footer-content">
        <div>
          <h2>Natalia Cortes</h2>
          <h3>Celulear: 312 0000000</h3>
        </div>
        <div>
          <h2>Felipe Rodriguéz</h2>
          <h3>Celular: 312 0000000</h3>
        </div>
      </div>
    </Footer>
  );
};

export default FooterM;
