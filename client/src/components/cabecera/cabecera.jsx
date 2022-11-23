import React from "react";
import styles from "./cabecera.module.css";
import logo from "../../assets/logo.png";
import Sesion from "../cabecera/componentsCabecera/sesionMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuResponsive from "./componentsCabecera/menuHamburguesa";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../../contexto/AppContext"
import { Busqueda } from "../../modelos/criterioBusqueda";

export default function Cabecera() {
  const {setBusqueda, setSinUsuarioParaReserva} = useContext(Contexto)
  const redirigir = useNavigate()
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  function volver() {
    setBusqueda(new Busqueda)
    setSinUsuarioParaReserva(false)
    redirigir("/")
  }


  return (
    <header className={styles.contenedor}>
      <div className={styles.navWrap}>
        <div className={styles.logo}>
          <button onClick={volver} className="bi me-2">
            <img src={logo} />
          </button>
          <p className={styles.lema}>Disfruta el camino</p>
        </div>
        <div className={styles.sesion}>
          <Sesion />
        </div>
        <div className={styles.menuHamburguesa}>
          <FontAwesomeIcon icon={faBars} onClick={toggle}></FontAwesomeIcon>
        </div>
        <MenuResponsive isOpen={isOpen} toggle={toggle} />
      </div>
    </header>
  );
}
