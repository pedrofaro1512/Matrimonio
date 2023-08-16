import React, { useState } from "react";
import Header from "./Components/Header/Header";
import FooterM from "./Components/Footer/Footer";
import Nosotros from "./Components/Nosotros/Nosotros";
import Contador from "./Components/Contador/Contador";
import Itinerario from "./Components/Itinerario/Itinerario";
import Regalos from "./Components/Regalos/Regalos";
import Confirmacion from "./Components/Confirmacion/Confirmacion";
import Comentarios from "./Components/Comentarios/Comentarios";
import Home from "./Components/Home/Home";
import Vestimenta from "./Components/Vestimenta/Vestimenta";
import Rueda from "./Components/Rueda/Rueda";
import ChatBot from "./Components/ChatBot/ChatBot";
// Sifonn + Forum
import { QuestionCircleOutlined, UpOutlined } from "@ant-design/icons";
import { FloatButton, Button, BackTop } from "antd";

import "./App.css";

function App() {
  const [showBackTop, setShowBackTop] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowBackTop(true);
    } else {
      setShowBackTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <Header />
      <Home />
      <div id="nosotros">
        <Nosotros />
      </div>
      <div id="cronometro">
        <Contador />
      </div>
      <Itinerario />
      <Vestimenta />
      <div id="momentos">
        <Rueda />
      </div>
      <Regalos />
      <Comentarios />
      <div id="confirmacion">
        <Confirmacion />
      </div>
      <FooterM />
      <>
        <BackTop
          visibilityHeight={200}
          style={{
            right: 24,
            bottom: 120,
          }}
        >
          <Button
            type="primary"
            shape="circle"
            icon={<UpOutlined />}
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </BackTop>
      </>

      {/* {showChatBot && <ChatBot isVisible={showChatBot} />} */}
      <>
        <FloatButton
          icon={<QuestionCircleOutlined />}
          type="primary"
          style={{
            right: 24,
          }}
          onClick={() => setShowChatBot(!showChatBot)}
        />
      </>
    </div>
  );
}

export default App;
