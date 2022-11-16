import React from 'react'
import Calendario from './calendario/calendario'
import DetalleReserva from './detalleReserva/detalleReserva'
import FormDatos from './formDatos/formDatos'
import HorarioReserva from './horarioReserva/horarioReserva'
import CabeceraProducto from '../producto/cabeceraProducto'
import PoliticasProducto from '../producto/politicasProducto'
import styles from "../Reserva/reservaContenedor.module.css"

export default function Reserva() {
  return (
      <section className={`container`}>
        <CabeceraProducto />
        <div>
          <div>
            <FormDatos />
            <Calendario />
            <HorarioReserva />
          </div>
            <DetalleReserva />
        </div>
        <PoliticasProducto />
      </section>
  )
}
