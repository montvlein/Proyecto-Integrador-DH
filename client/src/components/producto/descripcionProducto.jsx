import React from 'react'
import styles from './descripcionProducto.module.css'

export default function DescripcionProducto({descripcion}) {
  return (
    <section className={styles.seccionDescripcionProducto}>
      <h3 className={styles.tituloDescripcionProd}>Descripción</h3>
      <hr></hr>
      <p>{descripcion}</p>
    </section>
  )
}
