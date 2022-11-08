import React from 'react'
import styles from './cabeceraProducto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function CabeceraProducto() {
  return (
    <section className={styles.cabeceraProducto}>
      <div className={styles.divUnoSeccionCabeceraProducto}>
        <h3 className={styles.parrafoUno}>Autos compactos</h3>
        <h2 className={styles.parrafoDos}>Chevrolet Onix</h2>
      </div>
      <div className={styles.iconIzquierda}>
        <FontAwesomeIcon
          icon={faAngleLeft}
 
        />
      </div>
    </section>
  )
}
