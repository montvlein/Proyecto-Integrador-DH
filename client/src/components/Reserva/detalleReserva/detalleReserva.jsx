import React from 'react'
import styles from '../detalleReserva/detalleReserva.module.css'
import stylesArticlulo from '../../producto/producto'   
import { useState, useEffect } from 'react'
import { DigitalBookingApi } from '../../../data/conexionAPI'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";


export default function DetalleReserva() {
  const { idProducto } = useParams()
  const [cargando, setEstaCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const backgroundImagen = (producto) => {
    return {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${producto.url[0]})`,
    }
  }
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
    )
  }
  return (
    <section className={styles.sectionDetalle}>
      <div className={styles.detalleReserva}>
        <h3 className={styles.tituloReserva}>Detalle de reserva</h3>
        <div className={styles.imagenReserva}></div>
        <p className={styles.detalleCategoria}>{producto.categoria.toUpperCase()}</p>
        <h5 className={styles.detallleNombre}>{producto.nombre}</h5>
        <div className={styles.calificacionEstrellas}>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
        </div>
        <div className={styles.iconoGlobo}>
        <FontAwesomeIcon
          icon={faLocationDot}
          className={styles.iconUbi}
        />
        <p className={styles.ubicacionReserva}>Aeroparque Jorge Newbery, Buenos Aires, Argentina</p>
        </div>
        <div className={styles.divDosSeccionDatosUbicacionPorducto}></div>
        <div>Check in</div>
        <div>Check out</div>
        <button className={styles.botonReserva}>Confirmar Reserva</button>
      </div>
    </section>
  )
}
