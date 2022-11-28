import styles from "../cabecera.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Contexto from "../../../contexto/AppContext";
import { useContext } from "react";

function UsuarioIniciado() {
  const { getUsuario } = useContext(Contexto)
  const { cerrarSesion } = useContext(Contexto)

  return (
    <div className={styles.padreSesion}>

        <div className={styles.iconoSesion}>
          <h6>
            {getUsuario().nombre.charAt(0).toUpperCase()}{getUsuario().apellido.charAt(0).toUpperCase()}
            </h6>
        </div>

      <div className={styles.contenedorNombreSesion}>
        <dl>
          <dt className={styles.saludo}>Hola,</dt>
          <dl className={styles.nombreUsuario}>
          {getUsuario().nombre.charAt(0).toUpperCase() + getUsuario().nombre.slice(1)}{" "} 
          {getUsuario().apellido.charAt(0).toUpperCase() + getUsuario().apellido.slice(1)}</dl>
        </dl>
      </div>

      <div className={styles.iconoCerrar}>
        <FontAwesomeIcon icon={faXmark} onClick={cerrarSesion}></FontAwesomeIcon>
      </div>
    </div>





  );
}

export default UsuarioIniciado;
