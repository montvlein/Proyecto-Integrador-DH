import MisReservas from "./misReservas/misReservas";
import NotLoggeado from "../NotFound/notLoggeado";
import styles from "./perfilContenedor.module.css";
import Contexto from "./../../contexto/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

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
        <h3>Hola, {getUsuario().nombre}</h3>
        <Link to={"reservas"} className={styles.botonesMenu}>Mis Reservas</Link>
        <p className={styles.botonesMenu}>Favoritos</p>
        <p className={styles.botonesMenu}>Mis Datos</p>
      </aside>
      <MisReservas idUsuario={getUsuario().id} />
    </section>
  ) : (
    <NotLoggeado/>
  );
}
