import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGauge,
  faGasPump,
  faGear,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./cards2.module.css";
import { useState } from "react";

const Card2 = ({ id, nombre, imagenes, precio, caracteristica, categoria }) => {
  const portada = imagenes[0].url
  const corazonVacio = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACl0lEQVRIie2UTWxMYRSGn/PNHUOnYoe0TbRy55YuSCNqW7EQMx0sqB0LQWjsa8kKkdi0SScsGpFIqATzUxEJW7HBYrR3rp8FDWumdMbcYzEzMp3OT1l7l+ee93nP+b7cD/6rjaS+8Ki/v8/4/jgQBTYDXxF5XCqVLh96984DSG7dGpFAYBzYD2wCvgBp35grB+fnPzQNSNn2fkRmgM4GwxRVZExAUJ0Agg16vqnqkbjnPakWTO3kVbhCyhcZ0nw+LDCIyF0gKKoJVKeAICL3BAY1nw/7IkNAGlgvIjPpvr4tVa71J6l8LJ0KqXguF6+Z6hVwLOk4aVG9CYjAqZjrTtf0vARGUpFICohhWePA2WUbVM4cY8zFBqsTd91bAicEjsdyuelGPSpyCUArrGUbABsB8pY118gMEMvl7jT7BvAjGMx2FApQvnjqN1gACBcKditIK61bWnJqWfUBswCqevJfA8SYqvfxioBAIHAVWELkdMa2B/4WnnScbZSHKyJybUXAgbm5j6jeANaoyHTGtkOrhT/r7V0rcBsIoZoYcd33KwIAFkOhC0BWYbcvktAGf3q9FGTRshKo7gKyFcYfrQBkbHvAF3kBdKrq5IjnnRfQZvC040ygeg74blT3RD0vW9tj6k1Rz8uqyGHgp4iMZSKR682mz0QilyvwghEZrYc33KCqpOMcFtXyEwFTHd3d5/c+f/4L4NnwsJX//HkCOEP5jRqNu+6DRpyWZ5x0nH2ieh/YADwtFotHTShUCvj+HSAGfDcio1HXnW3GaHuJD/v7dwR8Pw30AG8r5e3Ap5IxsUPz829a+dsGAGRsu8cXSQE7K6XXRnUk6nmf2nlXFQCQ7OrqkHB4EkDz+bH4wsLiar3/1VK/ARU+7csdGSxsAAAAAElFTkSuQmCC"
  const corazonLleno =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABtklEQVRIie2UMWsUQRTHf28ggYPzzlyhKdJY2Ag2NhZiERHu3BMsDOJ38AN4YC/aCIIE8hUkTSCJZwobsYpFSEAQoiJEjEr2Mjk5ISbvWSS3LLe3ux7ZMv9u38z8fm+GmYXT5EQGC6+r1QvqXAsIgEngB2ZtUX3S2NvbBFipVC6qcy0TqQPngW1gyak+rXv/JVXwqlarYzYPlIc089dEHggIZi+AsSFzuiYyE4ThSkJw3Pl6CrwfS9t5XKJml5u7u18BXL96fCxZ8D44Cw5wRkRa/Q8XGwhyFo6SiBUXnCuKLkeXIyH4XpQA+DZMsFigIGJFgkPVZ8BBAfBDU32eENz2/jMwV4BgNvD+U0IA4MbHHwKbJ4B/PCiVWvFC4k4v12qXnNk7g7MjwrsK15qdzka86AZnBWH4wUTuA/sjwPdNZGYQDhmvcrlavSHOLZD/unsicrcRhu1hg5nPvj0xcd2OrlwlZcpvU70TeP8mjZE4onganc5bnLsJ/Eq2Jj9VdToLnisAuLWzs2oiVzBbjdiwhurVpvfv89bn/RmjvJyaKlV6vcemat1y+dG9ra0//7v2NJn5BzJukuOZmLIgAAAAAElFTkSuQmCC"
  const [corazon, setCorazon] = useState(corazonVacio)

  function like() {
    corazon === corazonVacio?setCorazon(corazonLleno):setCorazon(corazonVacio)
  }

  return (
    <section>
      <div className={styles.contenedorPadreCard}>

        <div className={styles.contenedorImagen}>
          <img
            src={portada}
            className={styles.imagenCard}
          ></img>
        </div>

        <div className={styles.contenedorInformacion}>
          <h6>{categoria}</h6>
          <div className={styles.contenedorTituloAño}><h3>{nombre}</h3>
          <h5>{caracteristica.modelo}</h5>
          </div>
        </div>

        <div className={styles.caracteristicasPadre}>
          <div className={styles.caracteristicasDIV}>
            <FontAwesomeIcon icon={faPerson} className={styles.icons} />
            <p>{caracteristica.puertas} Personas</p>
          </div>
          <div className={styles.caracteristicasDIV}>
            <FontAwesomeIcon icon={faGauge} className={styles.icons} />
            <p>{caracteristica.consumo}</p>
          </div>
          <div className={styles.caracteristicasDIV}>
            <FontAwesomeIcon icon={faGasPump} className={styles.icons} />
            <p>{caracteristica.motor}</p>
          </div>
          <div className={styles.caracteristicasDIV}>
            <FontAwesomeIcon icon={faGear} className={styles.icons} />
            <p>{caracteristica.caja}</p>
          </div>
        </div>
        <hr className={styles.divisor}></hr>
        <div className={styles.contenedorFooter}>
          <p className={styles.textoFooter}> {precio} / <span>Diario</span></p>
          <div className={styles.contenedorBoton}>
          <img src={corazon} onClick={like} className={styles.iconLike}/>
          <Link to={`/producto/${id}`}><button className={styles.boton}>Alquilar ahora</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2;
