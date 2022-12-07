import styles from "./cargarImagenes.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CargarImagenes({cantImagenes, setCantImagenes}) {
  const [listaImagenes, setListaImagenes] = useState([""])

  const agregarImagen = () => {
    setListaImagenes([...listaImagenes, ""])
    let cant = cantImagenes + 1
    setCantImagenes(cant)
  }

  const eliminarImagen = (index) => {
    const elementoEliminado = listaImagenes.filter((valor, i) => {
        return i != index;
      });
      setListaImagenes(elementoEliminado);
      let cant = cantImagenes - 1
    setCantImagenes(cant)
  }

  function setValor(e, index) {
    e.preventDefault()
    setListaImagenes(s => {
        const newArr = s.slice()
        newArr[index] = e.target.value
        return newArr
    })
  }

   return (
    <section>
        <h3 className={styles.titulo}>Cargar imagenes</h3>
            {listaImagenes.map((valor, index) =>
        <div className={styles.contenedorPadre} key={index}>
            <div className={styles.div}>
                <input
                onChange={(e)=>setValor(e, index)}
                type="text"
                name={`imagen${index}`}
                className={styles.input}
                placeholder="Https://"
                value={valor}
                />
            </div>
            <div className={styles.contenedorBotonAgregar}>
            {index == 0 ? (
                <FontAwesomeIcon
                icon={faSquarePlus}
                className={styles.headerIcon}
                onClick={() => agregarImagen()}
              />

          ):(
              <FontAwesomeIcon
                icon={faSquareXmark}
                className={styles.headerIconEliminar}
                onClick={() => eliminarImagen(index)}
              />
          )}
            </div>
        </div>
            )}
    </section>
   )
}