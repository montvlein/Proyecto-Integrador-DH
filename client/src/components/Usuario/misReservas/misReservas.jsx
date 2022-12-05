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
        <div class="table-responsive m-3">
          <table class="table table-striped table-borderless table-sm text-center">
            <thead>
              <tr className="table-warning">
                <th scope="col">Id</th>
                <th scope="col">Modelo</th>
                <th scope="col">Categoria</th>
                <th scope="col">Hora inicio</th>
                <th scope="col">Fecha inicio</th>
                <th scope="col">Lo recoger en</th>
                <th scope="col">Hora entrega</th>
                <th scope="col">Fecha entrega</th>
                <th scope="col">d'ias reserva</th>
                <th scope="col">Precio</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <section className="d-flex justify-content-center w-100">
                  <div className="spinner-border m-5" roler="status"></div>
                </section>
              ) : (
                misReservas.map(datosReserva => <CardReserva {...datosReserva} key={datosReserva.id} />)
                  )}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

function CardReserva({horaComienzoReserva, fechaInicialReserva, fechaFinalReserva, autoNombre, autoCategoria, autoId, id}) {
  const [auto, setAuto] = useState({})
  const [cargando, setCargando] = useState(true)
  const diasReserva = (new Date(fechaFinalReserva) - new Date(fechaInicialReserva)) / (1000*60*60*24)

  useEffect(()=>{
    DigitalBookingApi.auto.buscarPorID(autoId)
      .then(autoInfo => {
        setAuto(autoInfo)
        setCargando(false)
        console.log(auto)
      })
  },[])

  function calcularPrecio(auto) {
    return auto.precio * diasReserva
  }

  return cargando ? (
      <tr>
        <th scope="row">{id}</th>
        <td>{autoNombre}</td>
        <td>{autoCategoria}</td>
        <td>{horaComienzoReserva}</td>
        <td>{fechaInicialReserva}</td>
        <td></td>
        <td>10:00</td>
        <td>{fechaFinalReserva}</td>
        <td></td>
        <td>{diasReserva}</td>
        <td></td>
      </tr>
  ) : (
    <tr>
      <th scope="row" className="m-1">{id}</th>
      <td>{autoNombre}</td>
      <td>{autoCategoria}</td>
      <td>{horaComienzoReserva}</td>
      <td>{fechaInicialReserva}</td>
      <td>{auto.ciudad.nombre}</td>
      <td>10:00</td>
      <td>{fechaFinalReserva}</td>
      <td>{diasReserva}</td>
      <td>${calcularPrecio(auto)}</td>
      <button>Imprimir</button>
    </tr>
  );
}

// return cargando?(
//   <article className={styles.contenedor}>
//     <div className={styles.info}>
//       <p className={styles.tituloAuto}>{autoNombre}</p>
//       <p className={styles.subtituloAuto}>{autoCategoria}</p>
//       <p>Hora inicio: {horaComienzoReserva}</p>
//       <p>Fecha inicio: {fechaInicialReserva}</p>
//       <hr />
//       <p>Horario de entrega: 10 pm</p>
//       <p>Fecha de entrega: {fechaFinalReserva}</p>
//     </div>
//   </article>
// ):(
//   <article className={styles.contenedor}>
    
//       <p className={styles.tituloAuto}>{autoNombre}</p>
//       <p className={styles.subtituloAuto}>{autoCategoria}</p>
//       <p>Lo recoges en: </p>
//       <p>Hora inicio: {horaComienzoReserva}</p>
//       <p>Fecha inicio: {fechaInicialReserva}</p>

//       <hr />

//       <p>Lo dejas en:</p>
//       <p>Horario de entrega: 10 pm</p>
//       <p>Fecha de entrega: {fechaFinalReserva}</p>

//       <hr />
//       <p>Total dias reservado: {diasReserva}</p>
//       <p>Precio: ${calcularPrecio(auto)}</p>
//     <div className={styles.botones}>
//       <button>Imprimir</button>
//     </div>
//   </article>
// )