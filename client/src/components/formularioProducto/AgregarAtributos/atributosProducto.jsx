import styles from "./atributosProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { useEffect, useState, useContext } from "react";

export default function AgregarAtributos() {
  const [listaAtributos, setListaAtributos] = useState([
    { nombre: "Elige el atributo", descripcion: "", icono: "" },
  ]);

  const agregarAtributo = (index) => {
    setListaAtributos(listaAtributos.concat(index));
  };

  const eliminarAtributo = (index) => {
    const elementoEliminado = listaAtributos.filter((valor, i) => {
      console.log(i, index);
      return i != index;
    });
    setListaAtributos(elementoEliminado);
  };

  return (
    <section>
      <h3 className={styles.titulo}>Agregar atributos</h3>
      {listaAtributos.map((valor, index) => (
        <Atributos
          key={index}
          indice={index}
          agregarAtributo={agregarAtributo}
          eliminarAtributo={eliminarAtributo}
          atributo={valor}
        />
      ))}
    </section>
  );
}

function Atributos({ indice, agregarAtributo, eliminarAtributo, atributo }) {
  const {nombre, descripcion, icono} = atributo
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [nombreCaracteristicaComponente, setNombreCaracteristicaComponente] = useState(nombre);
  const arrayNombres = caracteristicas.map((caracteristicas, index) => {
    return caracteristicas.nombre;
  });
  let nuevaListaNombres = new Set(arrayNombres);
  nuevaListaNombres = Array.from(nuevaListaNombres);

  useEffect(() => {
    DigitalBookingApi.caracteristica.listar().then((caracteristicas) => {
      setCaracteristicas(caracteristicas);
    });
  }, []);

  return (
    <div className={styles.contenedorFormulario}>
      <div className={styles.div1}>
        <label className={styles.label}>Nombre del Atributo</label>
        <select className={styles.input} defaultValue="Elige el atributo">
          <option disabled hidden>
          Elige el atributo
          </option>
          {nuevaListaNombres.map((caracteristicas, indexCaracteristicas) => (
            <option key={indexCaracteristicas} onChange={(event)=>setNombreCaracteristicaComponente(event.target.value)}>{caracteristicas}</option>
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
        <input
          type="text"
          value=""
          name="icono"
          className={styles.input}
          disabled
        />
      </div>

      {indice == 0 ? (
        <div className={styles.contenedorBotonAgregar}>
          <FontAwesomeIcon
            icon={faSquarePlus}
            className={styles.headerIcon}
            onClick={() => agregarAtributo({nombreCaracteristicaComponente, descripcion, icono})}
          />
        </div>
      ) : (
        <div className={styles.contenedorBotonAgregar}>
          <FontAwesomeIcon
            icon={faSquareXmark}
            className={styles.headerIconEliminar}
            onClick={(event) => eliminarAtributo(indice)}
          />
        </div>
      )}
    </div>
  );
}
