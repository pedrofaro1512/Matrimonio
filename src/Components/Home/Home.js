import React from "react";
import imagen01 from "../../asstes/img/imagen01.jpg";
import imagen02 from "../../asstes/img/imagen02.jpg";
import imagen03 from "../../asstes/img/imagen03.jpg";
import imagen04 from "../../asstes/img/imagen04.jpg";
import imagen05 from "../../asstes/img/imagen05.jpg";
import "./Home.css";

import { Carousel } from "antd";

const Home = () => {
  return (
    <Carousel autoplay>
      <div className="carousel-item">
        <img src={imagen01} alt="imagen01" />
      </div>
      <div className="carousel-item">
        <img src={imagen02} alt="imagen02" />
      </div>
      <div className="carousel-item">
        <img src={imagen03} alt="imagen03" />
      </div>
      <div className="carousel-item">
        <img src={imagen04} alt="imagen04" />
      </div>
      <div className="carousel-item">
        <img src={imagen05} alt="imagen05" />
      </div>
    </Carousel>
  );
};

export default Home;
