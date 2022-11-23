import React from 'react'
import Calendario from './calendario/calendario'
import DetalleReserva from './detalleReserva/detalleReserva'
import FormDatos from './formDatos/formDatos'
import HorarioReserva from './horarioReserva/horarioReserva'
import CabeceraProducto from '../producto/cabeceraProducto'
import PoliticasProducto from '../producto/politicasProducto'
import styles from "../Reserva/reservaContenedor.module.css"
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import stylesArticlulo from '../producto/producto'
import { DigitalBookingApi } from '../../data/conexionAPI'
import Contexto from "../../contexto/AppContext"

export default function Reserva() {
  const { idProducto } = useParams();
  const { getUsuario } = useContext(Contexto)
  const [cargando, setEstaCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const [reserva, setReserva] = useState({
    horaComienzoReserva: "", 
    fechaInicialReserva: "",
    fechaFinalReserva: "",
    auto: "",
    cliente: getUsuario(),

  });

  function setHoraComienzoReserva(hora) {
      reserva.horaComienzoReserva = hora
  }

  function setFechaFinalReserva(fecha) {
    reserva.fechaFinalReserva = fecha
  }

  function setFechaInicialReserva(fechaI) {
    reserva.fechaInicialReserva = fechaI 
  }

  useEffect(() => {
    DigitalBookingApi.auto.buscarPorID(idProducto).then((auto) => {
      setProducto(auto)
      setEstaCargando(false)
      reserva.auto = auto
    })
  }, []);

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
        <div className={styles.contenedorFormularioReserva}>
          <div>
            <FormDatos/>
            <Calendario fechaInicial={setFechaInicialReserva} fechaFinal={setFechaFinalReserva} />
            <HorarioReserva horaReserva={setHoraComienzoReserva}/>
          </div>
           <div> 
           <DetalleReserva producto={producto} reserva={reserva}/>
           </div>
        </div>
        <PoliticasProducto />
      </section>
  )
}
