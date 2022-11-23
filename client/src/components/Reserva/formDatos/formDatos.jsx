import React from "react";
import styles from "../formDatos/formDatos.module.css";
import Contexto from "../../../contexto/AppContext"
import { useContext, useState } from "react";

export default function FormDatos() {
  const { getUsuario } = useContext(Contexto)

  return (
    <section className={styles.contenedorPadre}>
      <div>
        <h3>Completa tus datos</h3>
        <hr></hr>
      </div>
      <div className={styles.contenedorFormulario}>
        <div className={styles.contenedorNP}>
          <div>
            <p>Nombre</p>
            <input
              type="text"
              value={getUsuario()?.nombre}  
              name="nombre"
              disabled
              readOnly
            />
          </div>
          <div>
            <p>Apellido</p>
            <input type="text" value={getUsuario()?.apellido} name="apellido" disabled />
          </div>
        </div>
        <div className={styles.contenedorET}>
          <div>
            <p>Correo Electronico</p>
            <input
              type="email"
              value={getUsuario()?.email}
              name="email"
              disabled
              readOnly
            />
          </div>
          <div>
            <p>Ciudad</p>
            <input
              type="text"
              value={getUsuario()?.ciudad?"Prueba":"Agrega tu ciudad"}
              placeholder="Buenos Aires, Argentina"
              name="ciudad"
              readOnly
              
            />
          </div>
        </div>
      </div>
    </section>
  );
}
