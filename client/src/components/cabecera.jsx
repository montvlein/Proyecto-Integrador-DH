import React from "react"
import styles from "../styles/cabecera.module.css";
import logo from "../assets/logo.png";

export default function Cabecera() {
    return (
        <header className={styles.cabecera}>
        <div>
            <a href="./" className="logoEmpresa"><img src={logo}/></a>
            <a href="" className="lemaEmpresa">Lema Empresa</a>
        </div>
        <div>
            <button type="button">Inicio Sesión</button>
            <button type="button">Registro</button>
        </div>
        </header>
    )
}
