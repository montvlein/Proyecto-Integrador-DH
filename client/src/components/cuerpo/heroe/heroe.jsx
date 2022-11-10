import { Link } from "react-router-dom";
import styles from "./heroe.module.css";

export default function Heroe() {
  return (

    <section className={styles.heroeContenedor}>
      <div className={styles.contenidoPadre}>
        <div className={styles.contenido}>
        <h2>
          Disfruta la primavera, <br />
          disfruta el camino.
        </h2>
        <p className={styles.descripcion}>
          {" "}
          Busca alquiler de autos baratos en Argentina. <br/>Con una flota diversa de
          19.000 vehículos. <br></br><span>Digital Booking</span> los tiene.
        </p>
    
        </div>
      </div>
    </section>

  );
}
