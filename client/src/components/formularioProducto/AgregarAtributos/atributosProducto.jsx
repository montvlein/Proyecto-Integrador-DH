import styles from "./atributosProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { useEffect, useState, useContext } from "react";

export default function AgregarAtributos() {
  const [caracteristicas, setCaracteristicas] = useState([]);

  useEffect(() => {
    DigitalBookingApi.caracteristica.listar().then((caracteristicas) => {
      setCaracteristicas(caracteristicas);
    });
  }, []);

  console.log(caracteristicas)


  return (
    <section>
      <h3 className={styles.titulo}>Agregar atributos</h3>
      <div className={styles.contenedorFormulario}>

        <div className={styles.div1}>
          <label className={styles.label}>Nombre del Atributo</label>
          <select className={styles.input}>
          <option disabled hidden>Elige tu categoria</option>
            {caracteristicas.map((caracteristicas, indexCaracteristicas) => (
              <option key={indexCaracteristicas}>{caracteristicas.nombre}</option>
            ))}
          </select>
        </div>

        <div className={styles.div2}>
          <label className={styles.label}>Descripcion</label>
          <select className={styles.input}>
          <option></option>
          </select>
        </div>

        <div className={styles.div2}>
          <label className={styles.label}>Icono</label>
          <input type="text" value="" name="icono" className={styles.input} disabled/>
        </div>

        <div className={styles.contenedorBotonAgregar}>
          <FontAwesomeIcon icon={faSquarePlus} className={styles.headerIcon}/>
        </div>
      </div>
    </section>
  );
}
