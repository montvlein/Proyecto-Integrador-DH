import styles from "./../../styles/cabecera.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUser,
  faRightToBracket,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";


function MenuResponsive({ isOpen, toggle }) {
  return (
    <div className={isOpen ? styles.menuPadreMostrar : styles.menuPadre } isOpen={isOpen}>
      <div className={styles.menuContenedor}>
        <div className={styles.iconoCierre}>
          <FontAwesomeIcon icon={faXmark} onClick={toggle} />
        </div>
        <ul className={styles.menuLista}>
          <a href="/"><li className={styles.menuIcon}>
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
          </li></a>
          <a href="/crearCuenta"><li className={styles.menuIcon}>
            <FontAwesomeIcon icon={faRightToBracket} />
            <p>Registrate</p>
          </li></a>
          <a href="/iniciarSesion"><li className={styles.menuIcon}>
            <FontAwesomeIcon icon={faUser} />
            <p>Inicia sesion</p>
          </li></a>
          
          <p>¿Deseas <span>cerrar sesion?</span></p>
        </ul>
        <div>
        </div>
      </div>
    </div>
  );
}

export default MenuResponsive;
