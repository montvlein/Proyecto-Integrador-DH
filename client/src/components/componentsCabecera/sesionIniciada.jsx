import styles from ".././../styles/cabecera.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Contexto from "../../contexto/AppContext"
import { useContext } from "react";

function UsuarioIniciado() {
  const { getUsuario } = useContext(Contexto)
  const { cerrarSesion } = useContext(Contexto)

  return (
    <div class="d-flex align-items-center" className={styles.padreSesion}>
      <div>
        <div className={styles.iconoSesion}>
          <h6>
            {getUsuario().nombre.charAt(0).toUpperCase()}{getUsuario().apellido.charAt(0).toUpperCase()}
            </h6>
        </div>
      </div>

      <div>
        <dl>
          <dt class="nav-link px-2 text-white">Hola,</dt>
          <dl class="nav-link px-2 text-white fw-bold">{getUsuario().nombre} {getUsuario().apellido}</dl>
        </dl>
      </div>

      <div className={styles.iconoCerrar}>
        <FontAwesomeIcon icon={faXmark} onClick={cerrarSesion}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default UsuarioIniciado;
