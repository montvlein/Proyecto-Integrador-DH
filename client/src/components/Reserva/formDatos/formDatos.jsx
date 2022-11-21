import React from "react";
import styles from "../formDatos/formDatos.module.css";

export default function FormDatos() {
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
              placeholder="Maigualida"
              name="nombre"
              disabled
            />
          </div>
          <div>
            <p>Apellido</p>
            <input type="text" placeholder="Delgado" name="apellido" disabled />
          </div>
        </div>
        <div className={styles.contenedorET}>
          <div>
            <p>Correo Electronico</p>
            <input
              type="email"
              placeholder="Maigualida@Delgado.com"
              name="email"
              disabled
            />
          </div>
          <div>
            <p>Ciudad</p>
            <input
              type="text"
              placeholder="Buenos Aires, Argentina"
              name="email"
              disabled
            />
          </div>
        </div>
      </div>
    </section>
  );
}
