import React from 'react'
import stylesCabeceraProd from './cabeceraProducto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function CabeceraProducto() {
  return (
    <section className={stylesCabeceraProd.seccionCabeceraProducto}>
      <div className={stylesCabeceraProd.divUnoSeccionCabeceraProducto}>
        <p className={stylesCabeceraProd.seccionCabeceraProductoDivUnoParrafoUno}>Categoria del producto</p>
        <p className={stylesCabeceraProd.seccionCabeceraProductoDivUnoParrafoDos}>Título de producto</p>
      </div>
      <div className={stylesCabeceraProd.divDosSeccionCabeceraProducto}>
        <FontAwesomeIcon
          icon={faArrowLeft}
 
        />
      </div>
    </section>
  )
}
