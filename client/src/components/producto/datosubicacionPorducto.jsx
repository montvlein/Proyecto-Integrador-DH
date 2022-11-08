import React from "react";
import styles from "./datosUbicacionProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

export default function DatosUbicacionProducto() {
  return (
    <section className={styles.seccionDatosUbicacionProducto}>
      <div className={styles.divUnoSeccionDatosUbicacionPorducto}>
        <FontAwesomeIcon
          icon={faLocationDot}
          className={styles.imgUbicacionSeccionDatosUbicacionPorducto}
        />
        <div className={styles.divDosSeccionDatosUbicacionPorducto}>
          <p className={styles.parrafoUnoDivDosDatosUbicacionPordCiudad}>
            Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina
          </p>
          <p className={styles.parrafoDosDivDosDatosUbicacionPordSucursal}>
            Sucursal Aeroparque Jorge Newbery
          </p>
        </div>
      </div>

      <div className={styles.divTresSeccionDatosUbicacionPorducto}>
        <p className={styles.calificacionPalabra}>Excelente</p>
        <div className={styles.calificacionEstrellas}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    </section>
  );
}
