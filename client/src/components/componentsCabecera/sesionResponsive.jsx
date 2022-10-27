import styles from "./../../styles/cabecera.module.css";
import { useContext } from "react";
import Contexto from "../../contexto/AppContext";
import UsuarioIniciado from "./sesionUsuario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUser,
  faRightToBracket,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import RedesSociales from "../redesSociales";

function SesionResponsive({ toggle }) {
  const { estaLaSesionIniciada } = useContext(Contexto);
  const { cerrarSesion } = useContext(Contexto);

  if (estaLaSesionIniciada()) {
    return (
      <div className={styles.menuContenedor}>
        <div className={styles.iconoCierre}>
          <FontAwesomeIcon icon={faXmark} onClick={toggle} />
        </div>
        <div className={styles.contenedorListaMenu}>
          <UsuarioIniciado />
        </div>
        <div className={styles.cerrarSesion}>
          <p>
            ¿Deseas <span onClick={cerrarSesion}>cerrar sesion?</span>
          </p>
        </div>
        <div className={styles.redes}>
          <RedesSociales />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.menuContenedor}>
        <div className={styles.iconoCierre}>
          <FontAwesomeIcon icon={faXmark} onClick={toggle} />
        </div>
      <div className={styles.contenedorListaMenu}>
        <ul className={styles.menuLista}>
          <Link to="/" onClick={toggle}>
            <li className={styles.menuIcon}>
              <FontAwesomeIcon icon={faHouse} />
              <p>Home</p>
            </li>
          </Link>
          <Link to="/crearCuenta" onClick={toggle}>
            <li className={styles.menuIcon}>
              <FontAwesomeIcon icon={faRightToBracket} />
              <p>Registrate</p>
            </li>
          </Link>
          <Link to="/iniciarSesion" onClick={toggle}>
            <li className={styles.menuIcon}>
              <FontAwesomeIcon icon={faUser} />
              <p>Inicia sesion</p>
            </li>
          </Link>
        </ul>
      </div>

      </div>
    );
  }
}

export default SesionResponsive;
