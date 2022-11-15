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
          El viaje estuvo perfecto, y no tuve problemas con la reserva.
          Digital Booking la mejor empresa para reservar tu auto.
          <br></br>- Usuario134 
        </p>
        </div>
      </div>
    </section>

  );
}
