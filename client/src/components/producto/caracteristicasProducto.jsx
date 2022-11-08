import React from "react";
import styles from './caracteristicasProducto.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGauge,
  faGasPump,
  faCar,
} from "@fortawesome/free-solid-svg-icons";


export default function CaracteristicasProducto() {
    return (
      <section
        className={styles.seccionCaracteristicasPorducto}
      >
       <h3 className={styles.tituloDescripcionProd}>
       Encontrá tu auto
      </h3>
      <hr></hr>

      <ul className={styles.caracteristicas}>
            <li>
              <FontAwesomeIcon icon={faPerson} className={styles.icons} /> 4
              personas
            </li>
            <li>
              <FontAwesomeIcon icon={faGauge} className={styles.icons} /> 50
              Litros
            </li>
            <li>
              <FontAwesomeIcon icon={faGasPump} className={styles.icons} /> Nafta
            </li>
            <li>
              <FontAwesomeIcon icon={faCar} className={styles.icons} />
              Automático
            </li>
          </ul>
      </section>
    )
  }