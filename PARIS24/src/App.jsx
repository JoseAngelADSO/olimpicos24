import './styles.css';
import ReactPlayer from 'react-player'

const OlympicGames = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/300px-Olympic_rings_without_rims.svg.png"
            alt="Logo Juegos Olímpicos"
          />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#history">Historia</a></li>
            <li><a href="#sports">Deportes</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1>Juegos Olímpicos</h1>
          <p>
            Los Juegos Olímpicos son eventos deportivos multidisciplinarios en los que participan atletas de diversas partes del mundo. En la antigua Grecia, eran dedicados al dios Zeus. Existen dos tipos de Juegos Olímpicos: los Juegos Olímpicos de Verano y los Juegos Olímpicos de Invierno, que se realizan con un intervalo de cuatro años.
          </p>
        </section>

        <section id="history">
          <h2>Angel Barajas</h2>
          <img
            src="https://paisadeportes.com/wp-content/uploads/2023/04/angel-barajas-.png"
            width="600"
            height="400"
            alt="Angel Barajas"
          />
          <p>
            No sólo es el presente de la gimnasia artística de Colombia, sino que se perfila como uno de los grandes referentes de la especialidad para todo Sudamérica. Ángel Barajas, la joven estrella colombiana de la gimnasia obtuvo una cuota para los Juegos Olímpicos de París 2024 con apenas 17 años.
          </p>
        </section>

        <section id="sports">
          <h2>Historia Deportiva</h2>
          <p>
            Barajas ha tenido un ascenso meteórico en la gimnasia artística. En 2021, destacó en el Campeonato Panamericano Juvenil de Gimnasia Artística, donde ganó varias medallas, incluyendo oro en Caballo con Arcos. En los Juegos Suramericanos de la Juventud de 2022 en Rosario, Argentina, arrasó con siete medallas de oro, consolidándose como una promesa en la gimnasia.
          </p>
        </section>

        <section id="video-container">
          <h2>Video Demostracion de el gran talento en este deportista de talla Mundial</h2>
          <div className="video-section">
            <h2>Destacado de los Juegos Olímpicos</h2>
            <div className="video-container">
              <center>
            <ReactPlayer url='https://www.youtube.com/shorts/hiT3rP3LszA?feature=share' />
            </center>
            </div>
            <p className="video-description">
              Disfruta de los momentos más emocionantes de los Juegos Olímpicos. En este video, podrás ver algunas de las mejores actuaciones y eventos que han hecho historia.
            </p>
          </div>
        </section>
        <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <p>Puedes comunicarte con nosotros a través de los siguientes medios:</p>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Dirección</h3>
          <p>Donde viven los chirretes, Maracaibo, Venezuela</p>
        </div>
        <div className="contact-item">
          <h3>Teléfono</h3>
          <p>301 628 4449</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p>nicolasmaduro@gmail.com</p>
        </div>
      </div>
    </section>
      </main>
    </div>
  );
};

export default OlympicGames;
