import React from "react";
import styles from "./notFound.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NotLoggeado() {
  return (
    <section className={styles.section}>
      <div className={styles.contenedor}>
      <div className={styles.divContenedor}>
          <div className={styles.divContenedorHijo}>
            <div className={styles.divIconoCheck}>
              <FontAwesomeIcon icon={faFaceSadTear} />{" "}
            </div>
            <p className={styles.texto}>Parece que no estás loggeado. <br></br>Probá iniciando sesión o registrándote</p>
            <div className={styles.botonNotlogged}>

            <Link to="/" className={styles.divBotonOk}>
              Iniciar Sesión
            </Link>
            <Link to="/crearCuenta" className={styles.divBotonOk}>
              Registrarse
            </Link>
            </div>
            </div>
          </div>
        </div>
    </section>
  );
}