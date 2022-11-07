import React from "react";
import style from './caracteristicasProducto.module.css';
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
        className={style.seccionCaracteristicasPorducto}
      >
       <h3 className={style.tituloDescripcionProd}>
       Encontrá tu auto
      </h3>

      <ul className={style.caracteristicas}>
            <li>
              <FontAwesomeIcon icon={faPerson} className={style.icons} /> 4
              personas
            </li>
            <li>
              <FontAwesomeIcon icon={faGauge} className={style.icons} /> 50
              Litros
            </li>
            <li>
              <FontAwesomeIcon icon={faGasPump} className={style.icons} /> Nafta
            </li>
            <li>
              <FontAwesomeIcon icon={faCar} className={style.icons} />{" "}
              Automático
            </li>
          </ul>
      </section>
    )
  }