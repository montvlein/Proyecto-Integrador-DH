import React from "react";
import styles from "./caracteristicasProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGauge,
  faGasPump,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

export default function CaracteristicasProducto() {
  return (
    <section className={styles.seccionCaracteristicasPorducto}>
      <h3 className={styles.tituloDescripcionProd}>Caracteristicas</h3>
      <hr></hr>

      <div className={styles.caracteristicas}>
        <div className={styles.caracteristicasDIV}>
          <FontAwesomeIcon icon={faPerson} className={styles.icons} />
          <p>4 Personas</p>
        </div>
        <div className={styles.caracteristicasDIV}>
          <FontAwesomeIcon icon={faGauge} className={styles.icons} />
          <p>50 Litros</p>
        </div>
        <div className={styles.caracteristicasDIV}>
          <FontAwesomeIcon icon={faGasPump} className={styles.icons} />
          <p>Nafta</p>
        </div>
        <div className={styles.caracteristicasDIV}>
          <FontAwesomeIcon icon={faCar} className={styles.icons} />
          <p>Automatico</p>
        </div>
      </div>
    </section>
  );
}
