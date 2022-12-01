import styles from "./cargarImagenes.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function CargarImagenes() {

   return (
    <section>
        <h3 className={styles.titulo}>Cargar imagenes</h3>
      <div className={styles.contenedorPadre}>

      <div className={styles.div}>
            <input type="text"  name="nombreProducto" className={styles.input} placeholder="Https://"/>
          </div>
          <div className={styles.contenedorBotonAgregar}>
          <FontAwesomeIcon icon={faSquarePlus} className={styles.headerIcon} />
        </div>

    </div>
    </section>
   )
}