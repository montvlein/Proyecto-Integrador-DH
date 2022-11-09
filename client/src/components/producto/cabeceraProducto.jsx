import React from 'react'
import styles from './cabeceraProducto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function CabeceraProducto({nombre, categoria}) {
  return (
    <section className={styles.cabeceraProducto}>
      <div className={styles.divUnoSeccionCabeceraProducto}>
        <h3 className={styles.parrafoUno}>{categoria}</h3>
        <h2 className={styles.parrafoDos}>{nombre}</h2>
      </div>
      <Link to="/"><div className={styles.iconIzquierda}>
        <FontAwesomeIcon
          icon={faAngleLeft}
        />
      </div></Link>
    </section>
  )
}
