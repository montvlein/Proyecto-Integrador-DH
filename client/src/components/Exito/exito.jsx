import React from "react";
import styles from "./exito.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Exito() {
  return (
    <section className={styles.contenedorMain}>
      <div className={styles.divPadre}>
        <div className={styles.divMadre}>
          <div className={styles.divContenedorHijo}>
            <div className={styles.divIconoCheck}>
              <FontAwesomeIcon icon={faCircleCheck} />{" "}
            </div>
            <h4 className={styles.texto}> ¡Muchas Gracias! </h4>
            <p className={styles.texto}>Tu reserva ha sido exitosa</p>
            <Link to="/" className={styles.divBotonOk}>
              OK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
