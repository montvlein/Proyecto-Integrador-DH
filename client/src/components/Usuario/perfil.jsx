import MisReservas from "./misReservas/misReservas";
import styles from "./perfilContenedor.module.css";

export default function Perfil() {
  return (
    <section className={styles.contenedorPadre}>
        <aside className={`d-flex flex-column justify-content-between ${styles.aside}`}>
          <div className={styles.iconoSesion}>
                MB
        </div>
          <h3>Hola, Micaela</h3>
            <p>Mis Reservas</p>
            <p>Favoritos</p>
            <p>Mis Datos</p>
        </aside>
      <MisReservas />
    </section>
  );
}
