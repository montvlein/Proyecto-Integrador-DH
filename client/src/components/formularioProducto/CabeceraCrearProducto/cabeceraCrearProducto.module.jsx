import styles from "./cabeceraCrearProducto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function CabeceraCrearProducto() {

  return (
    <section className={styles.cabeceraProducto}>
      <div className={styles.divUnoSeccionCabeceraProducto}>
      <h3 className={styles.parrafoUno}>Administracion</h3>
      </div>
      <Link to="/"><div className={styles.iconIzquierda}>
        <FontAwesomeIcon
          icon={faAngleLeft}
        />
      </div></Link>
      </section>
  )
}