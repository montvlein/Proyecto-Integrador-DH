import React from "react";
import styles from "./caracteristicasProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGauge,
  faGasPump,
  faGear,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";

export default function CaracteristicasProducto({caracteristica}) {
  return (
    <section className={styles.seccionCaracteristicasPorducto}>
      <h3 className={styles.tituloDescripcionProd}>Caracteristicas</h3>
      <hr></hr>

      <div className={styles.caracteristicas}>
        <div className={styles.caracteristicasDIV}>
          <FontAwesomeIcon icon={faPerson} className={styles.icons} />
          <p>{caracteristica.puertas} Personas</p>
        </div>
        <div className={styles.caracteristicasDIV}>
          <FontAwesomeIcon icon={faGauge} className={styles.icons} />
          <p>5km/ 1-Litros {caracteristica.consumo}</p>
        </div>
        <div className={styles.caracteristicasDIV}>
          <FontAwesomeIcon icon={faGasPump} className={styles.icons} />
          <p>{caracteristica.tipoMotor}</p>
        </div>
        <div className={styles.caracteristicasDIV}>
          <FontAwesomeIcon icon={faGear} className={styles.icons} />
          <p>{caracteristica.caja}</p>
        </div>
        <div className={styles.caracteristicasDIV}>
          <FontAwesomeIcon icon={faCalendar} className={styles.icons} />
          <p>{caracteristica.modelo}</p>
        </div>
      </div>
    </section>
  );
}
