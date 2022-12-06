
import styles from "../DatosProducto/datosProducto.module.css";
import BuscadorCiudad from "./ciudad"
import Contexto from "../../../contexto/AppContext";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { useEffect, useState, useContext } from "react";


export default function AtributosProducto() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    DigitalBookingApi.categoria.listar().then((categorias) => {
      setCategorias(categorias);
    });
  }, []);

  return (
    <section>
      <div className={styles.contenedorPadre}>
        <div className={styles.contenedor1}>
          <div className={styles.div}>
            <label className={styles.label}>Modelo del auto</label>
            <input type="text"  name="nombreProducto" className={styles.input} placeholder="Chevrolet Onix"/>
          </div>

          <div className={styles.div}>
            <label className={styles.label}>Categoria</label>
            <select className={styles.input} defaultValue="Elige la categoria">
            <option disabled hidden>Elige la categoria</option>
            {categorias.map((categorias, indexCategorias) => (
              <option key={indexCategorias}>{categorias.titulo}</option>
            ))}
            </select>
          </div>
        </div>

        <div div className={styles.contenedor2}>
          <div className={styles.div}>
            <label className={styles.label}>Dirección</label>
            <input type="text"  name="direccion" className={styles.input} placeholder="Dirección"/>
          </div>

          <div className={styles.div}>
            <label className={styles.label}>Ciudad</label>
            <BuscadorCiudad></BuscadorCiudad>
          </div>
        </div>

        <div className={styles.divDescripcion}>
          <label className={styles.label}>Descripcion</label>
          <textarea name="descripcion" placeholder="Escribir aquí"  className={styles.textarea}/>
        </div>
      </div>
    </section>
  );
}
