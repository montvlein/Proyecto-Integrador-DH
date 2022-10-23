import React from "react"
import styles from "../styles/cabecera.module.css";
import logo from "../assets/logo.png";
import Sesion from "./componentsCabecera/iniciadoSesion";

export default function Cabecera() {
    return (
        <header className={styles.cabecera} class="p-3 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <a href="./" class="bi me-2" ><img src={logo}/></a>
            </a>
    
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Encuentra tu auto</a></li>
            </ul>
    
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
            </form>
    
          <Sesion/>
          </div>
        </div>
      </header>
    )
}
