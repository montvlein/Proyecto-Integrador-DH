import styles from "./cargarImagenes.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CargarImagenes() {
  const [listaImagenes, setListaImagenes] = useState([])


  const agregarImagen = (index) => {
  setListaImagenes(listaImagenes => [...listaImagenes,
    <div className={styles.contenedorPadre} key={index}>
    <div className={styles.div}>
          <input type="text"  name="atributo" className={styles.input} placeholder="Https://"/>
        </div>
        <div className={styles.contenedorBotonAgregar}>
        <FontAwesomeIcon icon={faSquareXmark} className={styles.headerIconX} onClick={eliminarImagen}/>
      </div>
    </div>]
    
  )
  console.log(listaImagenes)
  }



  const eliminarImagen = () => {
   
  
      let nuevaLista = listaImagenes.filter((imagen, i) => imagen == i)
      setListaImagenes(listaImagenes)
      
      
    // const nuevaLista = listaImagenes.filter(
    // (listaImagenes, index) => listaImagenes != index
    // );
    //   setListaImagenes(nuevaLista)
  }

   return (
    <section>
        <h3 className={styles.titulo}>Cargar imagenes</h3>
      <div className={styles.contenedorPadre}>
      <div className={styles.div}>
            <input type="text"  name="atributo" className={styles.input} placeholder="Https://"/>
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