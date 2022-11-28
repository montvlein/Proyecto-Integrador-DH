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

const Card2 = ({ id, nombre, imagenes, precio, caracteristica, categoria }) => {
  let portada = imagenes[0].url
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
            <p>{caracteristica.tipoMotor}</p>
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
          <FontAwesomeIcon icon={faHeart} className={styles.iconLike} />
          <Link to={`/producto/${id}`}><button className={styles.boton}>Alquilar ahora</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2;
