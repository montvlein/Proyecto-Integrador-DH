import styles from "./misreservas.module.css";
import { useEffect, useState } from "react";
import { DigitalBookingApi } from "../../../data/conexionAPI";

export default function MisReservas({ idUsuario }) {
  const [misReservas, setMisReservas] = useState([]);
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    DigitalBookingApi.reserva.buscarPorIdUsuario(idUsuario)
    .then(reserva => {
      setMisReservas(reserva);
      setCargando(false)
    });
  }, []);

  return (
    <section>
    <div className={styles.contenedorTitulos}>
      <h3 className={styles.tituloMisReservas}>Mis Reservas</h3>
      </div>
      <section>
        <h4 className={styles.subtituloMisReservas}>Reservas activas</h4>
        { cargando?
        <section className="d-flex justify-content-center w-100">
          <div className="spinner-border m-5" roler="status"></div>
        </section>:
        misReservas.map((datosReserva, index) => <CardReserva {...datosReserva} key={index} />)
        }
      </section>
    </section>
  );
}

function CardReserva({horaComienzoReserva, fechaInicialReserva, fechaFinalReserva, autoNombre, autoCategoria}) {
  return (
    <article className={styles.contenedor}>
      <div className={styles.contenedorImagen}>
        <img
          src={
            "https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-03.jpg"
          }
          className={styles.imagenCard}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.tituloAuto}>{autoNombre}</p>
        <p className={styles.subtituloAuto}>{autoCategoria}</p>
        <p>Lo recoges en:</p>
        <p>Hora inicio: {horaComienzoReserva}</p>
        <p>Fecha inicio: {fechaInicialReserva}</p>
        <hr />
        <p>Lo dejas en:</p>
        <p>Horario de entrega: 10 pm</p>
        <p>Fecha de entrega: {fechaFinalReserva}</p>
      </div>
      <div className={styles.botones}>
        <button>Imprimir</button>
        <button>Agregar a Google Calendar</button>
      </div>
    </article>
  );
}