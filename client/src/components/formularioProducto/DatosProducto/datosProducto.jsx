import styles from "../DatosProducto/datosProducto.module.css";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { useEffect, useState } from "react";


export default function AtributosProducto() {
  const [categorias, setCategorias] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    DigitalBookingApi.categoria.listar().then((categorias) => {
      setCategorias(categorias);
    });
    DigitalBookingApi.ciudad.listar().then((ciudades) => {
      setCiudades(ciudades);
    });
  }, []);

  return (
    <section>
      <div className={styles.contenedorPadre}>
        <div className={styles.contenedor1}>
          <div className={styles.div}>
            <label className={styles.label}>Modelo del auto</label>
            <input
              type="text"
              name="nombreProducto"
              className={styles.input}
              placeholder="Chevrolet Onix"
              required
            />
          </div>

          <div className={styles.div}>
            <label className={styles.label}>Categoria</label>
            <select className={styles.input} name="categoriaID" required>
              <option disabled hidden selected >
                Elige una categoria
              </option>
              {categorias.map((categoria, indexCategorias) => (
                <option key={indexCategorias} value={categoria.id}>
                  {categoria.titulo}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.contenedor2}>
          <div className={styles.div}>
            <label className={styles.label}>Precio</label>
            <input
              type="number"
              name="precio"
              className={styles.input}
              placeholder="5000"
              required
            />
          </div>

          <div className={styles.div}>
            <label className={styles.label}>Ciudad</label>
            <select className={styles.input} name="ciudadID" required>
              <option disabled hidden selected>
                Elije una ciudad
              </option>
              {ciudades.map((ciudad, index) => (
                <option key={index} value={ciudad.id}>
                  {ciudad.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.divDescripcion}>
          <label className={styles.label}>Descripcion</label>
          <textarea
            name="descripcion"
            placeholder="Escribir aquí"
            className={styles.textarea}
            required
          />
        </div>
      </div>
    </section>
  );
}
