import MisReservas from "./misReservas/misReservas";
import styles from "./perfilContenedor.module.css";
import Contexto from "./../../contexto/AppContext";
import { useContext } from "react";
import { useState } from "react";

export default function Perfil() {
    const { getUsuario } = useContext(Contexto)

  return getUsuario().id ? (
    <section className={styles.contenedorPadre}>
      <aside
        className={`d-flex flex-column justify-content-between ${styles.aside}`}
      >
        <div className={styles.iconoSesion}>
          {getUsuario().nombre[0]}
          {getUsuario().apellido[0]}
        </div>
        <h3>{getUsuario().nombre}</h3>
        <p>Mis Reservas</p>
        <p>Favoritos</p>
        <p>Mis Datos</p>
      </aside>
      <MisReservas idUsuario={getUsuario().id} />
    </section>
  ) : (
    "Necesitas estar logeado para ver esta pagina"
  );
}
