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

        {cargando ? (
          <section className="d-flex justify-content-center w-100">
            <div className="spinner-border m-5" roler="status"></div>
          </section>
        ) : (
          misReservas.map(datosReserva => <CardReserva {...datosReserva} key={datosReserva.id} />)
            )}

      </section>
    </section>
  );
}

function CardReserva({horaComienzoReserva, fechaInicialReserva, fechaFinalReserva, autoNombre, autoCategoria, autoId, id}) {
  const [auto, setAuto] = useState({})
  const diasReserva = (new Date(fechaFinalReserva) - new Date(fechaInicialReserva)) / (1000*60*60*24)

  useEffect(()=>{
    DigitalBookingApi.auto.buscarPorID(autoId)
      .then(autoInfo => {
        setAuto(autoInfo)
      })
  },[])

  function calcularPrecio() {
    return auto.precio * diasReserva
  }
  return (
    <article className={styles.contenedor}>
      <p className={styles.tituloAuto}>{autoNombre}</p>
      <p className={styles.subtituloAuto}>{autoCategoria}</p>
      <p>Lo recoges en: {auto?.ciudad?.nombre}</p>
      <p>Hora inicio: {horaComienzoReserva}</p>
      <p>Fecha inicio: {fechaInicialReserva}</p>

      <hr />

      <p>Horario de entrega: 10 pm</p>
      <p>Fecha de entrega: {fechaFinalReserva}</p>

      <hr />
      <p>Total dias reservado: {diasReserva}</p>
      <p>Precio: ${calcularPrecio()}</p>
      <button>Imprimir</button>
    </article>
  )
}