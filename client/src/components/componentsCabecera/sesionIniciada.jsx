import styles from ".././../styles/cabecera.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function UsuarioIniciado({ props, usuario }) {



  return (
    <div class="d-flex align-items-center" className={styles.padreSesion}>
      <div>
        <div className={styles.iconoSesion}>
          <h6>
            {usuario.nombre.charAt(0).toUpperCase()}{usuario.apellido.charAt(0).toUpperCase()}
            </h6>
        </div>
      </div>

      <div>
        <dl>
          <dt class="nav-link px-2 text-white">Hola,</dt>
          <dl class="nav-link px-2 text-white fw-bold">{usuario.nombre} {usuario.apellido}</dl>
        </dl>
      </div>

      <div className={styles.iconoCerrar}>
        <FontAwesomeIcon icon={faXmark} onClick={props}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default UsuarioIniciado;
