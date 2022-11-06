import React from 'react'
import stylesDatosUbicacionProd from './datosUbicacionProducto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'

export default function DatosUbicacionProducto() {
  return (
    <section className={stylesDatosUbicacionProd.seccionDatosUbicacionProducto}>
      <div
        className={stylesDatosUbicacionProd.divUnoSeccionDatosUbicacionPorducto}
      >
        <FontAwesomeIcon icon={faLocationDot} className={stylesDatosUbicacionProd.imgUbicacionSeccionDatosUbicacionPorducto}/>
        <div
          className={
            stylesDatosUbicacionProd.divDosSeccionDatosUbicacionPorducto
          }
        >
          <p className={stylesDatosUbicacionProd.parrafoUnoDivDosDatosUbicacionPordCiudad}>Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p>
          <p className={stylesDatosUbicacionProd.parrafoDosDivDosDatosUbicacionPordSucursal}>Sucursal Aeroparque Jorge Newbery</p>
        </div>
      </div>

      <div
        className={
          stylesDatosUbicacionProd.divTresSeccionDatosUbicacionPorducto
        }
      >
        <p className={stylesDatosUbicacionProd.parrafoDivTresDatosUbicacionPordCalificacionPalabra}>Excelente</p>
        <span className={stylesDatosUbicacionProd.spanDivTresDatosUbicacionPordCalificacionCalificacionEstrellas}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </span>


      </div>
    </section>
  )
}
