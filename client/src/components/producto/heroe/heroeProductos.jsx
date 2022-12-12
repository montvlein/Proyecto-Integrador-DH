import styles from "./heroeProductos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Heroe() {
  return (

    <section className={styles.heroeContenedor}>
      <div className={styles.contenidoPadre}>
        <div className={styles.contenido}>
        <div>
         <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
        </div>
        <p className={styles.descripcion}>
          "No tuve ningún inconveniente para usar el servicio.
          Recomiendo Digital Booking para reservar tu auto de manera fácil y rápida"
        </p>
        <span className={styles.nombreTestimonio}>- Leandro Mauro</span>
        </div>
      </div>
    </section>

  );
}
