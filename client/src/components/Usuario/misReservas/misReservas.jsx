import styles from "./misreservas.module.css";
import { useEffect, useState } from "react";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function MisReservas({ idUsuario }) {
  const [misReservas, setMisReservas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    DigitalBookingApi.reserva.buscarPorIdUsuario(idUsuario).then((reserva) => {
      setMisReservas(reserva);
      setCargando(false);
    });
  }, []);


  return (
    <section>
      <div className={styles.contenedorTitulos}>
        <h3 className={styles.tituloMisReservas}>Mis Reservas</h3>
      </div>
      <section>

        {cargando ? (
          <section className="d-flex justify-content-center w-100">
            <div className="spinner-border m-5" roler="status"></div>
          </section>
        ) : ( misReservas.length > 0 ?
          misReservas.map((datosReserva) => (
            <CardReserva {...datosReserva} key={datosReserva.id} />
          )): <h4 className={styles.subtituloMisReservas}>No has realizado reservas</h4>
        )}
      </section>
    </section>
  );
}

function CardReserva({
  horaComienzoReserva,
  fechaInicialReserva,
  fechaFinalReserva,
  autoNombre,
  autoCategoria,
  autoId,
  id,
}) {
  const [auto, setAuto] = useState({});
  const diasReserva =
    (new Date(fechaFinalReserva) - new Date(fechaInicialReserva)) /
    (1000 * 60 * 60 * 24);

  useEffect(() => {
    DigitalBookingApi.auto.buscarPorID(autoId).then((autoInfo) => {
      setAuto(autoInfo);
    });
  }, []);

  function calcularPrecio() {
    return auto.precio * diasReserva;
  }
  return (
    <article className={styles.contenedor}>
      <div className={styles.contenedorImagen}>
        <img
          src="https://images.pexels.com/photos/1197095/pexels-photo-1197095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className={styles.imagen}
        ></img>
        <FontAwesomeIcon
          icon={faCalendar}
          className={styles.icono}
        ></FontAwesomeIcon>
      </div>

      <div className={styles.flexTodosLosDatos}>
        <div className={styles.tituloYBoton}>
          <div className={styles.contenedorDatosAutos}>
            <p className={styles.tituloAuto}>{autoNombre}</p>
            <p className={styles.subtituloAuto}>{autoCategoria}</p>
          </div>
            <button className={styles.buttonReserva}>Imprimir</button>
        </div>

        <div className={styles.barraDivisora}></div>
        <div className={styles.contenedorTodosLosDatos}>
          <div className={styles.contenedorFecha}>
            <p>Lo recoges en: {auto?.ciudad?.nombre}</p>
            <p>Hora inicio: {horaComienzoReserva}</p>
            <p>Fecha inicio: {fechaInicialReserva}</p>
          </div>

          <div className={styles.barraDivisora}></div>
          <div className={styles.contenedorFecha}>
            <p>Horario de entrega: 10 pm</p>
            <p>Fecha de entrega: {fechaFinalReserva}</p>
          </div>

          <div className={styles.barraDivisora}></div>
          <div className={styles.contenedorFecha}>
            <p>Total dias reservado: {diasReserva}</p>
            <p className={styles.precio}>Precio: ${calcularPrecio()}</p>
            </div>
          </div>
        </div>
    </article>
  );
}
