import styles from "../detalleReserva/detalleReserva.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import estilo from "./botonR.module.css"

export default function DetalleReserva({ producto, fechaInicio, fechaFinal }) {

  return (
    <section className={styles.sectionDetalle}>
      <div className={styles.detalleReserva}>

        <div className={styles.contenedorImagen}>
        <h3 className={styles.tituloReserva}>Detalle de reserva</h3>
          <img src={producto.imagenes[0].url} className={styles.imagenCard} />
        </div>

        <div className={styles.contenedorDetalles}>
        <div className={styles.contenedorTituloEstrellas}>
          <p className={styles.detalleCategoria}>
            {producto.categoria.toUpperCase()}
          </p>
          <h5 className={styles.detalleNombre}>{producto.nombre}</h5>
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
            {producto.ciudad.nombre}, {producto.ciudad.provincia},{" "}
            {producto.ciudad.pais}
          </p>
        </div>

        <div className={styles.horariosReserva}>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.reservaCheckIn}>
            <label>Check in</label>
            <p
              className={styles.inputIn}>
              {fechaInicio}
              </p>
          </div>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.reservaCheckOut}>
            <label>Check out</label>
            <p
              className={styles.inputOut}
            >
              {fechaFinal}
            </p>
          </div>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.botonReservaContainer}>
            <button className={estilo.botonNuevo} type="submit"><span>Confirmar Reserva</span></button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}