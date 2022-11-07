import React from 'react'
import styles from './descripcionProducto.module.css'

export default function DescripcionProducto() {
  return (
    <section className={styles.seccionDescripcionProducto}>
      <h3 className={styles.tituloDescripcionProd}>Encontrá tu auto</h3>
      <p className={styles.textoDescripcionProd}>
        ¿Qué está incluido con el alquiler? <br></br>
        Nuestras tarifas incluyen vehículos nuevos en excelentes condiciones
        equipados para la zona, silla para bebe, buster o elevador, seguro,
        entrega y recepción de los vehículos en aeropuerto, terminal, hoteles y
        conductores adicionales sin cargo.<br></br>
        ¿En qué momento se abona el saldo por el alquiler? <br></br>
        El Saldo por el
        alquiler se abona en el momento de tomar la unidad
      </p>
    </section>
  )
}
