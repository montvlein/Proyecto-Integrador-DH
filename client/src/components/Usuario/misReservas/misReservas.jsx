import styles from "./misreservas.module.css";
import { useEffect, useState } from "react";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSadTear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function MisReservas({ idUsuario }) {
  const [misReservas, setMisReservas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    DigitalBookingApi.reserva.buscarPorIdUsuario(idUsuario).then((reserva) => {
      console.log(reserva)
      setMisReservas(reserva);
      setCargando(false);
    });
  }, []);

  return (
    <section>
      <div className={styles.contenedorTitulos}>
        <h3 className={styles.tituloMisReservas}>Mis Reservas</h3>
      </div>
      <p className={styles.info}>Acá podrás encontrar todas tus reservas.</p>
      <br></br>
      <section className={styles.contenedor}>
        {cargando ? (
          <section className="d-flex justify-content-center w-100">
            <div className="spinner-border m-5" roler="status"></div>
          </section>
        ) : misReservas.length > 0 ? (
          misReservas.map((datosReserva) => (
            <CardReserva {...datosReserva} key={datosReserva.id} setReservas={setMisReservas} reservas={misReservas}/>
          ))
        ) : (
          <section className={styles.sinReservaContenedor}>
            <div className={styles.divPadre}>
              <FontAwesomeIcon
                icon={faSadTear}
                className={styles.divIconoCheck}
              ></FontAwesomeIcon>
              <h4 className={styles.subtituloMisReservas}>
                Aún no has efectuado ninguna reserva
              </h4>
              <Link to="/" className={styles.divBotonOk}>
                Volver al home
              </Link>
            </div>
          </section>
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
  setReservas,
  reservas
}) {
  const [auto, setAuto] = useState({});
  const [portada, setPortada] = useState("https://images.pexels.com/photos/1197095/pexels-photo-1197095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  let diasReserva =
    (new Date(fechaFinalReserva) - new Date(fechaInicialReserva)) /
    (1000 * 60 * 60 * 24);
  diasReserva = diasReserva < 1 ? 1 : diasReserva;
  useEffect(() => {
    DigitalBookingApi.auto.buscarPorID(autoId).then((autoInfo) => {
      setAuto(autoInfo);
      setPortada(auto.imagenes[0].url)
    });
  }, []);

  function calcularPrecio() {
    return auto.precio * diasReserva;
  }
  const precio = calcularPrecio();
  let horaInicio = horaComienzoReserva.split(":");
  horaInicio = `${horaInicio[0]}:${horaInicio[1]}`;
  const horarioEntrega = diasReserva < 1 ? "22:00" : "10:00";

  function borrarReserva() {
    DigitalBookingApi.reserva.borrarPorID(id)
    .then(res => {
      let reservasActuales = reservas.filter(miReserva => miReserva.id != id)
      setReservas(reservasActuales)
    })
  }

  return (
    <article className={styles.contenedorPadre}>
      <div className={styles.contenedorImagen}>
        <img
          src={auto.imagenes?auto.imagenes[0].url:"https://images.pexels.com/photos/1197095/pexels-photo-1197095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          className={styles.imagen}
        ></img>
      </div>

      <div className={styles.flexTodosLosDatos}>
        <div className={styles.tituloYBoton}>
          <div className={styles.contenedorDatosAutos}>
            <p className={styles.tituloAuto}>{autoNombre}</p>
            <p className={styles.subtituloAuto}>{autoCategoria}</p>
          </div>
          <button className={`btn btn-outline-danger ${styles.btnCancelarTop}`} onClick={borrarReserva}>Cancelar</button>
        </div>

        <hr className={`${styles.barraDivisora} ${styles.hrReserva}`} />
        <div className={styles.barraDivisora}></div>

        <div className={styles.contenedorTodosLosDatos}>
          <div className={styles.contenedorFecha}>
            <p>Lo recoges en: {auto?.ciudad?.nombre}</p>
            <p>Hora inicio: {horaInicio}</p>
            <p>Fecha inicio: {fechaInicialReserva}</p>
          </div>

          <hr className={`${styles.barraDivisora} ${styles.hrReserva}`} />
          <div className={styles.barraDivisora}></div>
          <div className={styles.contenedorFecha}>
            <p>Horario de entrega: {horarioEntrega}</p>
            <p>Fecha de entrega: {fechaFinalReserva}</p>
          </div>

          <hr className={`${styles.barraDivisora} ${styles.hrReserva}`} />
          <div className={styles.barraDivisora}></div>
          <div className={styles.contenedorFecha}>
            <p>Total dias reservado: {diasReserva}</p>
            <p className={styles.precio}>Precio: ${precio}</p>
          </div>
        </div>

        <hr className={`${styles.barraDivisora} ${styles.hrReserva}`} />
        <button className={`btn btn-outline-danger ${styles.btnCancelarBottom}`}>Cancelar</button>

      </div>
    </article>
  );
}
