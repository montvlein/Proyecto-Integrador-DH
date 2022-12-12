import styles from "./atributosProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGauge,
  faGasPump,
  faGear,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { useEffect, useState } from "react";

export default function AgregarAtributos() {
  const [cargando, setCargando] = useState(true)
  const [caracteristicas, setCaracteristicas] = useState([]);
  const arrayNombres = caracteristicas.map((caracteristicas, index) => {
    return caracteristicas.nombre;
  });
  let nombreCaracteristicas = new Set(arrayNombres);
  nombreCaracteristicas = Array.from(nombreCaracteristicas);

  useEffect(() => {
    DigitalBookingApi.caracteristica.listar().then((caracteristicas) => {
      setCaracteristicas(caracteristicas);
    });
  }, []);

  useEffect(()=>{
    nombreCaracteristicas.length > 0 ? setCargando(false): setCargando(true)
  }, [nombreCaracteristicas])

  function iconoPorNombre(nombre) {
    if (nombre === "puertas" ) return faPerson
    if (nombre === "consumo" ) return faGauge
    if (nombre === "motor" ) return faGasPump
    if (nombre === "caja" ) return faGear
    if (nombre === "modelo" ) return faCar
  }

  return (
    <section>
      <h3 className={styles.titulo}>Agregar atributos</h3>
      { !cargando ? nombreCaracteristicas.map( (nombre, index) => {
      let descripcion = caracteristicas.filter(caracteristicaDB => caracteristicaDB.nombre === nombre)
      return(<AtributosHardcode nombre={nombre} descripcion={descripcion} icono={iconoPorNombre(nombre)} key={index}/>)
      }): "...cargando"}
    </section>
  );
}

function AtributosHardcode({ nombre, descripcion, icono }) {
  return (
    <div className={styles.contenedorFormulario}>
      <div className={styles.div1}>
        <label className={styles.label}>Nombre del Atributo</label>
        <input type="text" value={nombre} className={styles.input} disabled/>
      </div>

      <div className={styles.div2}>
        <label className={styles.label}>Descripcion</label>
        <select className={styles.input} name={nombre}>
        <option disabled hidden selected>Elige una opcion</option>
          { descripcion.map((desc, index) => <option key={index} value={desc.id}>{desc.descripcion}</option>)}
        </select>
      </div>

      <div className={styles.div2}>
        <label className={styles.label}>Icono</label>
            <div className={styles.input}><FontAwesomeIcon icon={icono} className={styles.icono}/></div>
      </div>
    </div>
  );
}
