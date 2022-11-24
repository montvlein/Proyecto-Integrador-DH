import React from 'react'
import Calendario from './calendario/calendario'
import DetalleReserva from './detalleReserva/detalleReserva'
import FormDatos from './formDatos/formDatos'
import HorarioReserva from './horarioReserva/horarioReserva'
import CabeceraProducto from '../producto/cabeceraProducto'
import PoliticasProducto from '../producto/politicasProducto'
import styles from "../Reserva/reservaContenedor.module.css"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import stylesArticlulo from '../producto/producto'
import { DigitalBookingApi } from '../../data/conexionAPI'

export default function Reserva() {
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
            <Calendario fechaInicial={setFechaInicio} fechaFinal={setFechaFinal} producto={producto} />
            <HorarioReserva setHoraInicial={setHoraInicial} hora={horaInicial}/>
          </div>
           <div>
           <DetalleReserva producto={producto} fechaInicio={fechaInicio} fechaFinal={fechaFinal} />
           </div>
        </div>
        <PoliticasProducto />
      </section>
  )
}
