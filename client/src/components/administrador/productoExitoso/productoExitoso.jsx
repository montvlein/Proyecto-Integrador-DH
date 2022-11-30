import React from 'react'
import styles from '../productoExitoso/productoExitoso.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function ProductoExitoso() {
  return (
    <section className={styles.productoExitoContainer}>
      <div className={styles.contenidoProdExitoso}>
        <div className={styles.cardProdExitoso}>
          <div className={styles.mensajeExitoso}>
            <div className={styles.iconoExitoso}>
              <FontAwesomeIcon icon={faCircleCheck} />{' '}
            </div>
            <p className={styles.texto}> Tu vehículo se ha creado con éxito </p>
            <Link to="/" className={styles.volverExitoBoton}>
              volver
            </Link>
            </div>
          </div>
        </div>
    
    </section>
  )
}
