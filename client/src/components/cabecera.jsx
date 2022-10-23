import React from "react";
import styles from "../styles/cabecera.module.css";
import logo from "../assets/logo.png";
import Sesion from "./componentsCabecera/sesion";

export default function Cabecera() {
  return (
    <>
      <header className={styles.cabecera} class="p-3 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <a href="./" class="bi me-2">
                <img src={logo} />
              </a>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li className={styles.mostrador}>
                <a href="#" class="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li className={styles.mostrador}>
                <a href="#" class="nav-link px-2 text-white">
                  Encuentra tu auto
                </a>
              </li>
            </ul>

            <Sesion />
          </div>
        </div>
      </header>

      <nav class={styles.navReposive}>
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h5 class="text-white h4">Collapsed content</h5>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid d-flex align-items-center justify-content-space-evenly">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
                <a href="./" class="bi me-2">
                  <img src={logo} />
              <a
                href="/"
                class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                </a>
              </a>
            </div>
    
        </nav>
      </nav>
    </>
  );
}
