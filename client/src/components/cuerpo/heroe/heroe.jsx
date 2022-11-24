import { Link } from "react-router-dom";
import styles from "./heroe.module.css";

export default function Heroe() {
  return (

    <section className={styles.heroeContenedor}>
      <div className={styles.contenidoPadre}>
        <div className={styles.contenido}>
        <h2>
          Disfruta el verano, <br />
          disfruta el camino.
        </h2>
        <p className={styles.descripcion}>
          {" "}
          Servicio de alquiler de autos en Argentina. <br/>Más de 300 vehículos por todo el país te están esperando. <br></br>
        </p>
    
        </div>
      </div>
    </section>

  );
}
