import React from 'react'
import styles from '../detalleReserva/detalleReserva.module.css'
import stylesArticlulo from '../../producto/producto'
import DatosUbicacionProducto from '../../producto/datosubicacionPorducto'
import { useState, useEffect } from 'react'
import { DigitalBookingApi } from '../../../data/conexionAPI'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import ImgProducto from '../../producto/imgProducto'
import { fromUnixTime } from 'date-fns'

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
        <ImgProducto imagenes={producto.imagenes} />
        {/* //ACA ME TRAJE EL
        COMPONENTE IMGEN PRODUCTO, NECESITO SABER COMO TRAER UNA SOLA IMAGEN */}
        <p className={styles.detalleCategoria}>
          {producto.categoria.toUpperCase()}
        </p>
        <h5 className={styles.detallleNombre}>{producto.nombre}</h5>
        {/* <div className={styles.calificacionEstrellas}>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
          <FontAwesomeIcon icon={faStar} className={styles.icon}/>
        </div> */}{' '}
        
        <div className={styles.detalleUbicacion}>
          {/* <FontAwesomeIcon
          icon={faLocationDot}
          className={styles.iconUbi}
        /> */}
          <DatosUbicacionProducto
            className={styles.detalleUbicacion}
            ubicacion={producto.ciudad}
          />{' '}
          {/* // ACA ME TRAJE EL COMPONENTE DE UBICACION NECESITO SABER COMO CAMBIAR
          EL FLEX DIRECTION, ME TOMA LA SECTION ORIGINAL DEL COMPONENTE */}
          {/* <p className={styles.ubicacionReserva}>Aeroparque Jorge Newbery, Buenos Aires, Argentina</p> */}
        </div>
        <div className={styles.horariosReserva}>
          {' '}
          {/* // ESTO NECESITO SABER SI SE HARDCODEA O ES NECESSARIO QUE SE ALIMENTE
          DEL COMPONENTE HORARIO DE RESERVA */}
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.reservaCheckIn}>
            Check in <span className={styles.dataReserva}>__/__/__</span>
          </div>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.reservaCheckOut}>
            Check out <span className={styles.dataReserva}>__/__/__</span>
          </div>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.botonReservaContainer}>
            <button className={styles.botonReserva}>Confirmar Reserva</button>
          </div>
        </div>
      </div>
    </section>
  )
}

