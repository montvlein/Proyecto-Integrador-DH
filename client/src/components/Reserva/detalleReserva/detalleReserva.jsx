import React from 'react'
import styles from '../detalleReserva/detalleReserva.module.css'
import ubicacion from "../../producto/cabeceraProducto"
import stylesArticlulo from '../../producto/producto'
import { useState, useEffect } from 'react'
import { DigitalBookingApi } from '../../../data/conexionAPI'
import { useParams } from 'react-router-dom'

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
        <h3 className={styles.tituloReserva}>Detalle de reserva</h3><hr></hr>
        <div className={styles.imagenReserva}></div>
        <p className={styles.detalleCategoria}>{producto.categoria}</p>
        <p className={styles.detallleNombre}>{producto.nombre}</p>
        {/* <p className={styles.descripcionReserva}>{producto.descripcion}</p> */}
        <p className={styles.ubicacionReserva}>{producto.ubicacion}</p>
        
        <div>Check in</div>
        <div>Check out</div>
        <button className={styles.botonReserva}>Confirmar Reserva</button>
      </div>
    </section>
  )
}
