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
                  En medio del turbulento escenario de la pandemia del Covid-19,
                  floreció un lazo excepcional que trascendió las pantallas,
                  uniendo nuestras almas virtualmente. Ese destello inicial,
                  surgido mientras el mundo enfrentaba la distancia física, nos
                  instó a explorarnos mutuamente en un nivel profundo y
                  conmovedor.
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
                <p>
                  Nuestra primera cita trascendió lo esperado al compartir un
                  café de origen único, reflejo de tu singularidad. En ese
                  rincón acogedor, el aroma del café fresco anticipaba momentos
                  especiales. Entre risas y sorbos, la conversación fluía,
                  tejiendo una narrativa propia. Esa taza de café era más que
                  una bebida, era un lienzo para descubrir gestos y melodías.
                  Fue ahí donde nuestras historias comenzaron a entrelazarse,
                  creando un prólogo prometedor.
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
                <h2>Nuestro primer beso</h2>
                <p>
                  Nuestro primer beso transcurrió en una gélida noche de la
                  ciudad, después de caminar juntos un tiempo. Bajo el cielo
                  estrellado, el ambiente cargado de complicidad hizo que el
                  frío se desvaneciera. Fue un beso que destiló la emoción de
                  cada paso y palabra compartida, sellando el recuerdo de una
                  noche que transformó nuestras historias en una.
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
                  Nuestro camino hacia el noviazgo fue una danza emocional que
                  nos unió de manera inesperada. A través de risas y
                  confidencias, descubrimos que compartíamos sueños y anhelos.
                  Los momentos juntos se tejieron con hilos de complicidad y
                  cariño, y poco a poco, nuestras miradas se volvieron cómplices
                  de un sentimiento que no podíamos ignorar. Fue en un instante
                  de sinceridad compartida cuando nuestras manos se entrelazaron
                  por primera vez, sellando un pacto silencioso que marcó el
                  comienzo de un amor que ha iluminado cada paso desde entonces.
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
                  Guatavita, un lugar impregnado de historia y misticismo,
                  vivimos nuestro primer viaje juntos. La sorpresa radicó en la
                  elección de un medio tan audaz como una motocicleta para
                  llegar allí, alejándonos de lo convencional. Pero lo que más
                  tocó mi corazón fue la sencillez y la alegría de mi prometida
                  ante cada nueva experiencia.
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
                <h2>Nuestro compromiso</h2>
                <p>
                  Nuestro compromiso fue un capítulo inolvidable, tejido con
                  sorpresa y emoción. En un restaurante romántico, con el cielo
                  estrellado como testigo, celebramos nuestro aniversario de
                  novios de una manera que superó todas las expectativas.
                  Acompañando el momento, una carta especial que escribí con
                  todo mi corazón se convirtió en el vínculo que unía nuestras
                  palabras a nuestros sentimientos más profundos. En ese
                  instante mágico, con la vista de las estrellas como fondo, le
                  entregué mi promesa de amor eterno y juntos dimos un paso
                  adelante en esta hermosa historia que estamos construyendo.
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
