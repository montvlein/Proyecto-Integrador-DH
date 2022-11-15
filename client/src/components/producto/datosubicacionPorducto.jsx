import React from "react";
import styles from "./datosUbicacionProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

export default function DatosUbicacionProducto({ubicacion}) {
  return (
    <section className={styles.seccionDatosUbicacionProducto}>
      <div className={styles.divUnoSeccionDatosUbicacionPorducto}>
        <FontAwesomeIcon
          icon={faLocationDot}
          className={styles.icon}
        />
        <div className={styles.divDosSeccionDatosUbicacionPorducto}>
          <p className={styles.parrafoUnoDivDosDatosUbicacionPordCiudad}>
          {ubicacion.nombre}, {ubicacion.provincia}, {ubicacion.pais}
          </p>
        </div>
      </div>

      <div className={styles.divTresSeccionDatosUbicacionPorducto}>
        <p className={styles.calificacionPalabra}>Excelente</p>
        <div className={styles.calificacionEstrellas}>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
        </div>
      </div>
    </section>
  );
}
