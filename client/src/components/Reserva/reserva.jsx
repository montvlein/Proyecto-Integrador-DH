import Calendario from './calendario/calendario'
import DetalleReserva from './detalleReserva/detalleReserva'
import FormDatos from './formDatos/formDatos'
import HorarioReserva from './horarioReserva/horarioReserva'
import CabeceraProducto from '../producto/cabeceraProducto'
import PoliticasProducto from '../producto/politicasProducto'
import styles from "../Reserva/reservaContenedor.module.css"
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import stylesArticlulo from '../producto/producto'
import { DigitalBookingApi } from '../../data/conexionAPI'
import { Reserva } from '../../modelos/reserva'
import Contexto from '../../contexto/AppContext'

export default function ReservaComponent() {
  const redirigir = useNavigate()
  const { getUsuario, setUbicacionUsuario, estaLaSesionIniciada } = useContext(Contexto)
  const { idProducto } = useParams();
  const [cargando, setEstaCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const [fechaInicio, setFechaInicio] = useState(Date.now())
  const [fechaFinal, setFechaFinal] = useState(Date.now())
  const [horaInicial, setHoraInicial] = useState("10:00")

  useEffect(() => {
    DigitalBookingApi.auto.buscarPorID(idProducto).then((auto) => {
      setProducto(auto)
      setEstaCargando(false)
    })
  }, []);

  function generarReserva(evento) {
    evento.preventDefault()
    setUbicacionUsuario(evento.target.elements.ciudad.value)
    let cliente = getUsuario()
    let reserva = new Reserva(horaInicial, fechaInicio, fechaFinal, producto, cliente)
    console.log(reserva)
    DigitalBookingApi.reserva.crear(reserva)
    .then(resultado => console.log(resultado)) // esto todavia no anda. El formato de la hora, creo que esta mal.
    .catch(error => ()=>{
      console.error(error)
      alert("No se pudo crear la reserva...")})
  }

  if (cargando) {
    return (
      <article
        className={`${stylesArticlulo.productoArticulo} d-flex justify-content-center`}
      >
        <div className="spinner-border m-5" roler="status"></div>
      </article>
    )}
  return (
      <section className="container-md">
        <CabeceraProducto nombre={producto.nombre}  categoria={producto.categoria} yendo={`/producto/${idProducto}`}/>
        <form className={styles.contenedorFormularioReserva} onSubmit={generarReserva}>
          <div>
            <FormDatos/>
            <Calendario fechaInicial={setFechaInicio} fechaFinal={setFechaFinal} producto={producto} />
            <HorarioReserva setHoraInicial={setHoraInicial} hora={horaInicial}/>
          </div>
           <div>
           <DetalleReserva producto={producto} fechaInicio={fechaInicio} fechaFinal={fechaFinal} />
           </div>
        </form>
        <PoliticasProducto />
      </section>
  )
}
