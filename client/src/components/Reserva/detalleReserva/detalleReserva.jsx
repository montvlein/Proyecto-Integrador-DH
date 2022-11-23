import styles from "../detalleReserva/detalleReserva.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import estilo from "./botonR.module.css"

export default function DetalleReserva({ reserva }) {

  return (
    <section className={styles.sectionDetalle}>
      <div className={styles.detalleReserva}>

        <div className={styles.contenedorImagen}>
        <h3 className={styles.tituloReserva}>Detalle de reserva</h3>
          <img src={reserva.auto.imagenes[0].url} className={styles.imagenCard} />
        </div>

        <div className={styles.contenedorDetalles}>
        <div className={styles.contenedorTituloEstrellas}>
          <p className={styles.detalleCategoria}>
            {reserva.auto.categoria.toUpperCase()}
          </p>
          <h5 className={styles.detalleNombre}>{reserva.auto.nombre}</h5>
          <div className={styles.calificacionEstrellas}>
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
          </div>
        </div>

        <div className={styles.detalleUbicacion}>
          <div className={styles.iconoGlobo}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.iconoUbi} />
          </div>
          <p className={styles.ubicacionReserva}>
            {reserva.auto.ciudad.nombre}, {reserva.auto.ciudad.provincia},{" "}
            {reserva.auto.ciudad.pais}
          </p>
        </div>

        <div className={styles.horariosReserva}>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.reservaCheckIn}>
            <label>Check in</label>
            <p
              className={styles.inputIn}>
              {reserva.fechaInicialReserva}
              </p>
          </div>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.reservaCheckOut}>
            <label>Check out</label>
            <p
              className={styles.inputOut}
            >
            {reserva.getFechaFinalReserva}
            </p>
          </div>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.botonReservaContainer}>
            <button className={estilo.botonNuevo}><span>Confirmar Reserva</span></button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}