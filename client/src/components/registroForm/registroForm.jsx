import React, { useState } from "react";
import styles from "../../styles/formularios.module.css";
import { Usuario } from "../../modelos/usuario.js"

const RegistroForm = (props) => {

  function esValido(...args) {
    return false
  }

  function enviarRegistro(evento) {
    evento.preventDefault()
    let [nombre, apellido, mail, pass] = [evento.target.elements.nombre.value, evento.target.elements.apellido.value, evento.target.elements.email.value,evento.target.elements.password.value]
    let usuario = new Usuario(nombre, apellido, mail)
    console.table(usuario)
    console.log(pass)
  }

  return (
    <div className={styles.divContainer}>
      <form className={styles.formularioContainer} autocomplete="off" onSubmit={enviarRegistro}>
        <div className={styles.contenidoFormulario}>
          <h3 className={styles.tituloFormulario}>Crear cuenta</h3>

          <div class="row">
            <div class="form-group col-6">
              <label>Nombre</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail"
                placeholder="Micaela"
                name="nombre"
                required
              />
            </div>
            <div class="form-group col-6">
              <label>Apellido</label>
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="Barbero"
                name="apellido"
                required
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="mica@digitalhouse.com.ar"
              name="email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="*********"
              name="password"
              required
            />
            <label>Confirmar contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="*********"
              required
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
  );
};

export default RegistroForm;
