import styles from "../cabecera.module.css";
import { useContext } from "react";
import Contexto from "../../../contexto/AppContext";
import UsuarioIniciado from "./sesionUsuario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUser,
  faRightToBracket,
  faHouse,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import RedesSociales from "../../footer/redesSociales";

function SesionResponsive({ toggle }) {
  const { getUsuario } = useContext(Contexto);
  const { estaLaSesionIniciada } = useContext(Contexto);
  const { cerrarSesion } = useContext(Contexto);

  if (estaLaSesionIniciada()) {
    return (
      <div className={styles.menuContenedor}>
        <div className={styles.iconoCierre2}>
          <FontAwesomeIcon icon={faXmark} onClick={toggle} />
        </div>

        <div className={styles.divUsuarioIniciado}>
          <UsuarioIniciado />
        </div>

        <div className={styles.contenedorBotones}>
        { getUsuario().esAdmin?
          <button className={styles.botonMenuResponsive}><Link className={styles.navlink} to="/miperfil/crearProducto">Cargar producto</Link></button>:
          <div className={styles.botonesUsuario}>
          <button className={styles.botonMenuResponsive}><Link className={styles.navlink} to="/miperfil/reservas">Mis reservas</Link></button>
          <button className={styles.botonMenuResponsiveFavoritos}><Link className={styles.navlink} to="/miperfil/favoritos">Favoritos</Link></button>
          </div>
        }
        </div>

        <div className={styles.cerrarSesion}>
          <p>
            ¿Deseas <span onClick={cerrarSesion}>cerrar sesion?</span>
          </p>
        <div className={styles.redes}>
          <RedesSociales />
        </div>
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
              <li className={styles.divOpcionMenu}>
                <FontAwesomeIcon icon={faHouse} className={styles.iconMenu}/>
                <p className={styles.opcionMenu}>Home</p>
              </li>
            </Link>
            <hr className={styles.divisor}/>
            <Link to="/crearCuenta" onClick={toggle}>
              <li className={styles.divOpcionMenu}>
                <FontAwesomeIcon icon={faRightToBracket} className={styles.iconMenu}/>
                <p className={styles.opcionMenu}>Registrate</p>
              </li>
            </Link>
            <hr className={styles.divisor}/>
            <Link to="/iniciarSesion" onClick={toggle}>
              <li className={styles.divOpcionMenu}>
                <FontAwesomeIcon icon={faUser} className={styles.iconMenu}/>
                <p className={styles.opcionMenu}>Inicia sesion</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.redesPosicionamiento}>
        <div className={styles.redes}>
          <RedesSociales />
        </div>
        </div>
      </div>
    );
  }
}

export default SesionResponsive;
