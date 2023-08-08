import Header from "./Components/Header/Header";
import FooterM from "./Components/Footer/Footer";
import Nosotros from "./Components/Nosotros/Nosotros";
import Contador from "./Components/Contador/Contador";
import Itinerario from "./Components/Itinerario/Itinerario";
import Regalos from "./Components/Regalos/Regalos";
import Confirmacion from "./Components/Confirmacion/Confirmacion";
import Comentarios from "./Components/Comentarios/Comentarios";
import Home from "./Components/Home/Home";
import Momentos from "./Components/Momentos/Momentos";
import Vestimenta from "./Components/Vestimenta/Vestimenta";

import { QuestionCircleOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

import "./App.css";

function App() {
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
        <Momentos />
      </div>
      <Regalos />
      <Comentarios />
      <div id="confirmacion">
        <Confirmacion />
      </div>
      <FooterM />
      <>
        <FloatButton
          icon={<QuestionCircleOutlined />}
          type="primary"
          style={{
            right: 24,
          }}
        />
      </>
    </div>
  );
}

export default App;
