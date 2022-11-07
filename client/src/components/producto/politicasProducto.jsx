import React from 'react'
import style from './politicasProducto.module.css'

export default function PoliticasPorducto() {
  return (
    <section className={style.seccionPoliticasPorducto}>
      <h3 className={style.tituloPoliticasProd}>Lo que tenes que saber</h3>
      <div className={style.politicasProd}>
        <div>
          <h4>Requisitos</h4>
          <div>
            <ul>
              <li>Pasaporte o Documento de Identidad</li>
              <li>
                Edad mínima de 25 años: El conductor deberá tener mínimo 25
                años. Conductores con una edad entre 21 y 24 años estarán
                sujetos a tarifas adicionales y no podrán alquilar vehículos de
                categoría Premium, Especial, SUV, Minivan, Van, Descapotable,
                Utilitario y Lujo. Los conductores adicionales deberán tener de
                manera obligatoria una edad mínima de 25 años.
              </li>
              <li>
                Tarjeta de crédito internacional a nombre del conductor donde se
                le realizará el bloqueo del monto de garantía. Dicho bloqueo
                será liberado al retornar el vehículo.
              </li>
              <li>Voucher impreso.</li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Salud y Seguridad</h4>
          <div>
            <ul>
              <li>Se aplican pautas</li>
              <li>Detector de humo</li>
              <li>Deposito de seguridad</li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Politicas de cancelacion</h4>
          <div>
          <ul>
            <li>
            
              Cancelación: El cliente debe contactar a BookingCars para
              solicitar la cancelación de su reserva antes de la fecha y hora
              estipuladas para recoger el vehículo. Una vez cancelada, la
              reserva no podrá ser utilizada. La reserva admite cancelación sin
              cargo hasta 24hs antes de la fecha y hora de retiro del vehículo.
              Si la reserva es cancelada por la compañía de alquiler debido al
              no cumplimiento del cliente de los requisitos mínimos (edad mínima
              requerida, licencia de conducir válida, pasaporte válido, tarjeta
              de crédito válida para el depósito de garantía, voucher
              impreso...etc), o el cliente no se presenta a retirar el vehículo
              por cualquier razón, se le cobrará el valor equivalente a un día
              de alquiler independientemente de la duración del mismo.
            </li>
            <li>
              Modificaciones de la Reserva: La solicitud de cambio en tu
              petición de reserva estará sujeta a un re-análisis de
              disponibilidad de vehículos y a una actualización de valores
              basada en la tabla vigente de tarifas y en la cotización de moneda
              al momento de la solicitud de modificación, que puede ser distinta
              al utilizado en el pre-pago de la reserva.
            </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
