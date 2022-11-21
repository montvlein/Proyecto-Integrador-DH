import React from "react";
import styles from "../formDatos/formDatos.module.css";

export default function FormDatos({usuario}) {
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
              value={usuario.nombre}  
              name="nombre"
              disabled
            />
          </div>
          <div>
            <p>Apellido</p>
            <input type="text" value={usuario.apellido} name="apellido" disabled />
          </div>
        </div>
        <div className={styles.contenedorET}>
          <div>
            <p>Correo Electronico</p>
            <input
              type="email"
              value={usuario.email}
              name="email"
              disabled
            />
          </div>
          <div>
            <p>Ciudad</p>
            <input
              type="text"
              placeholder="Buenos Aires, Argentina"
              name="ciudad"
              
            />
          </div>
        </div>
      </div>
    </section>
  );
}
