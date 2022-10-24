import React, { useState } from "react"
import styles from "../../styles/formularios.module.css"

const RegistroForm = (props) => {
  /*
    let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    */
  return (
    <div className={styles.divContainer}>
      <form className={styles.formularioContainer}>
        <div className={styles.contenidoFormulario}>
          <h3 className={styles.tituloFormulario}>Crear cuenta</h3>
          <div className="form-group mt-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder=""
            />
            <label>Apellido</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder=""
            />
          </div>
          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder=""
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder=""
            />
            <label>Confirmar contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder=""
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className={styles.botonFormulario}>
              Crear cuenta
            </button>
          </div>
          <p className="text-center mt-2">
            ¿Ya tienes una cuenta? <a href="/iniciarSesion">Iniciar sesión</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default RegistroForm;