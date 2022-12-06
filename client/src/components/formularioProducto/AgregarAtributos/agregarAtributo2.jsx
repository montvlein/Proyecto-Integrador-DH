import styles from "./atributosProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { useEffect, useState, useContext } from "react";

export default function AgregarAtributos() {
  const [listaAtributos, setListaAtributos] = useState([]);
  const [caracteristicas, setCaracteristicas] = useState([]);
  const arrayNombres = caracteristicas.map((caracteristicas, index) => {
    return caracteristicas.nombre;
  });

  let nuevaListaNombres = new Set(arrayNombres);
  nuevaListaNombres = Array.from(nuevaListaNombres);

  const descripcionConsumo = new

  useEffect(() => {
    DigitalBookingApi.caracteristica.listar().then((caracteristicas) => {
      setCaracteristicas(caracteristicas);
    });
  }, []);

  const agregarAtributo = (index) => {
    setListaAtributos((listaAtributos, i) => [
      ...listaAtributos,
      <Atributos
        eliminarAtributo={eliminarAtributo}
        agregarAtributo={agregarAtributo}
        nombreAtributo={nuevaListaNombres[1]}
        indice={i}
      />,
      <Atributos
        eliminarAtributo={eliminarAtributo}
        agregarAtributo={agregarAtributo}
        nombreAtributo={nuevaListaNombres[2]}
        indice={i}
      />,
      <Atributos
        eliminarAtributo={eliminarAtributo}
        agregarAtributo={agregarAtributo}
        nombreAtributo={nuevaListaNombres[3]}
        indice={i}
      />,
      <Atributos
        eliminarAtributo={eliminarAtributo}
        agregarAtributo={agregarAtributo}
        nombreAtributo={nuevaListaNombres[4]}
        indice={i}
      />,
    ]);
  };

  const eliminarAtributo = (index) => {
    const elementoEliminado = listaAtributos.filter((valor, i) => {
      return i != index;
    });
    setListaAtributos(elementoEliminado);
  };

  console.log(listaAtributos)

  return (
    <section>
      <h3 className={styles.titulo}>Agregar atributos</h3>
      <Atributos
        agregarAtributo={agregarAtributo}
        eliminarAtributo={eliminarAtributo}
        nombreAtributo={nuevaListaNombres[0]}
      />
      {listaAtributos}
    </section>
  );
}

function Atributos({
  agregarAtributo,
  eliminarAtributo,
  indice,
  nombreAtributo,
}) {
  return (
    <div className={styles.contenedorFormulario}>
      <div className={styles.div1}>
        <label className={styles.label}>Nombre del Atributo</label>
        <input
          type="text"
          value={nombreAtributo}
          name="icono"
          className={styles.input}
          disabled
        />
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
            icon={faSquareXmark}
            className={styles.headerIconEliminar}
            onClick={eliminarAtributo}
          />
        </div>
      ) : (
        <div className={styles.contenedorBotonAgregar}>
          <FontAwesomeIcon
            icon={faSquarePlus}
            className={styles.headerIcon}
            onClick={agregarAtributo}
          />
        </div>
      )}
    </div>
  );
}
