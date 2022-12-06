import styles from "./cargarImagenes.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CargarImagenes() {
  const [listaImagenes, setListaImagenes] = useState([])


  const agregarImagen = event => {
    setListaImagenes(listaImagenes.concat(
    <div className={styles.contenedorPadre} id="agregarImagen">
    <div className={styles.div}>
          <input type="text"  name="nombreProducto" className={styles.input} placeholder="Https://"/>
        </div>
        <div className={styles.contenedorBotonAgregar}>
        <FontAwesomeIcon icon={faSquareXmark} className={styles.headerIconX} onClick={eliminarImagen}/>
      </div>
    </div>)
    )
  }


  const eliminarImagen = event => {
    const nuevaLista = listaImagenes.filter(
    (listaImagenes, index) => listaImagenes.index != index
    );
      setListaImagenes(nuevaLista)
  }

   return (
    <section>
        <h3 className={styles.titulo}>Cargar imagenes</h3>
      <div className={styles.contenedorPadre}>
      <div className={styles.div}>
            <input type="text"  name="nombreProducto" className={styles.input} placeholder="Https://"/>
          </div>
          <div className={styles.contenedorBotonAgregar}>
          <FontAwesomeIcon icon={faSquarePlus} className={styles.headerIcon} 
            onClick={agregarImagen}
          />
        </div>
      </div>
      {listaImagenes}
    </section>
   )
}