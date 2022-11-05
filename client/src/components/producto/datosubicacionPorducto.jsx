import React from 'react'
import stylesDatosUbicacionProd from './datosUbicacionProducto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

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
          <p>Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p>
          <p>Sucursal Aeroparque Jorge Newbery</p>
        </div>
      </div>

      <div
        className={
          stylesDatosUbicacionProd.divTresSeccionDatosUbicacionPorducto
        }
      >
        <p>Muy bueno</p>
      </div>
    </section>
  )
}
