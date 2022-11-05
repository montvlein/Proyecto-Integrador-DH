import React from "react";
import stylesDatosUbicacionProd from './datosUbicacionProducto.module.css';
import stylesIconoUbicacion from './datosUbicacionProducto.module.css';


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