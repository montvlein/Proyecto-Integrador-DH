import React from "react";
import styles from "../styles/cabecera.module.css";
import logo from "../assets/logo.png";
import Sesion from "./componentsCabecera/sesion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import MenuResponsive from "./componentsCabecera/menuHamburguesa";
import { useState } from "react";

export default function Cabecera() {

  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen)
  }


  return (
    <div className={styles.contenedor}>
      <div className={styles.navWrap}>
        <div className={styles.logo}>
          <a href="./" className="bi me-2">
            <img src={logo} />
          </a>
          <p className={styles.lema}>Disfruta el camino</p>
        </div>
        <div className={styles.sesion}>
          <Sesion />
        </div>

        <div className={styles.menuHamburguesa}>
        <FontAwesomeIcon icon={faBars} onClick={toggle}></FontAwesomeIcon>
        </div>
        <MenuResponsive isOpen={isOpen} toggle={toggle}/>

      </div>
    </div>
  );
}
