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
  const { idProducto } = useParams()
  const [usuario, setUsuario] = useState({id:1 , nombre:`Maigualida`, apellido:`Delgado`, email:`maigualida.delgado@digitalhouse.com`})
  const [reserva, setReserva] = useState()
  const [cargando, setEstaCargando] = useState(true)
  const [producto, setProducto] = useState({})
  useEffect(() => {
    DigitalBookingApi.auto.buscarPorID(idProducto).then((auto) => {
      setProducto(auto)
      setEstaCargando(false)
    })
  }, [])

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
        <CabeceraProducto nombre={producto.nombre}  categoria={producto.categoria}/>
        <div className={styles.contenedorFormularioReserva}>
          <div>
            <FormDatos usuario={usuario}/>
            <Calendario />
            <HorarioReserva />
          </div>
           <div> 
           <DetalleReserva producto={producto} />
           </div>
        </div>
        <PoliticasProducto />
      </section>
  )
}
