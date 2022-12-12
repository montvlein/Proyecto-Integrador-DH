import React from "react";
import styles from "./notFound.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSurprise } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function notFound() {
  return (
    <section className={styles.section}>
      <div className={styles.contenedor}>
      <div className={styles.divContenedor}>
          <div className={styles.divContenedorHijo}>

          <div className={styles.contenedorIconoTitulo}>
            <h4 className={styles.titulo}> ¡Ups! </h4>
            <div className={styles.divIconoCheck}>
              <FontAwesomeIcon icon={faFaceSurprise} />{" "}
            </div>
          </div>

            <p className={styles.texto}>La página que estás buscando no existe</p>
            <Link to="/" className={styles.divBotonOk}>
              Volver al home
            </Link>
            </div>
          </div>
        </div>
    </section>
  );
}