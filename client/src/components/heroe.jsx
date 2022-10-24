import styles from "../styles/heroe.module.css";

export default function Heroe() {
  return (
    <section>
      <div className={styles.contenidoPadre}>
        <div className={styles.contenido}>
        <h2>
          Disfruta la primavera, <br />
          disfruta el camino.
        </h2>
        <p className={styles.descripcion}>
          {" "}
          Busca alquiler de autos baratos en Argentina. <br/>Con una flota diversa de
          19.000 vehículos. <span>Digital Booking</span> los tiene.
        </p>
        <button class="btn btn-warning" href="#">
          Alquila tu auto
        </button>
        </div>
      </div>
    </section>
  );
}
