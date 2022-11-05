import React from "react";
import stylesCabeceraProd from './cabeceraProducto.module.css';
import stylesOpcionVolver from './cabeceraProducto.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLocationDot } from '@fortawesome/free-solid-svg-icons';



export default function CabeceraProducto() {
    return (
      <section className={stylesCabeceraProd.seccionCabeceraProducto}>
        <div>
          <p>Categoria del producto</p>
          <p>Título de producto</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={stylesOpcionVolver.opcionVolver}
          />
          Volver
        </div>
      </section>
    )
  }

