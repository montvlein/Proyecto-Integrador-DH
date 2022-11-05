import React from "react";
import stylesDatosUbicacionProd from './datosUbicacionProducto.module.css';
import stylesIconoUbicacion from './datosUbicacionProducto.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot } from '@fortawesome/free-solid-svg-icons';



export default function DatosUbicacionProducto() {
    return (
      <section className={stylesDatosUbicacionProd.seccionDatosUbicacionProducto}>
        <div>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={stylesIconoUbicacion.datosUbicacionProducto}
          />
          <p>Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p>
        </div>
        
      </section>
    )
  }