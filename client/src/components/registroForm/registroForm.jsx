import React, { useState, useContext } from "react";
import styles from "../../styles/formularios.module.css";
import Contexto from "../../contexto/AppContext";
import { useNavigate } from "react-router-dom"

const RegistroForm = () => {
  const redirigir = useNavigate()
  const { registrarUsuario } = useContext(Contexto)
  const [esMenorQue5, setEsMenorQue5] = useState(false)
  const [sonDiferentes, setSonDiferentes] = useState(false)

  function enviarRegistro(evento) {
    evento.preventDefault()
    let [nombre, apellido, mail, pass, confirmacion] = [evento.target.elements.nombre.value, evento.target.elements.apellido.value, evento.target.elements.email.value, evento.target.elements.password.value, evento.target.elements.confirmacion.value]
    if (!esMayorDe5(pass)) { setEsMenorQue5(true) } else { setEsMenorQue5(false)}
    if (!sonIguales(pass, confirmacion)) { setSonDiferentes(true)} else { setSonDiferentes(false)}
    if (!validarEmail(mail)) {}
    if (esValido(pass, confirmacion)) {
      registrarUsuario({ nombre, apellido, mail, pass })
      redirigir("/")
    }
  }
  if (esMenorQue5 || sonDiferentes) {
    return (
      <div className={styles.divContainer}>
        <Formulario registrar={enviarRegistro}/>
        <Errores menor={esMenorQue5} diferentes={sonDiferentes} />
      </div>
    );
  }
  return (
    <div className={styles.divContainer}>
      <Formulario registrar={enviarRegistro}/>
    </div>
  );
};

export default RegistroForm;

function Formulario({registrar}) {

  return(
    <form className={styles.formularioContainer} autocomplete="off" onSubmit={registrar} method="POST">
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
              name="confirmacion"
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
  )
}

function Errores({ menor, diferentes }) {
  return(
    <ul className={styles.error}>
        { menor?<li >La contraseña debe tener más de 6 caracteres</li>:null }
        { diferentes?<li >Las contraseñas no coinciden</li>:null }
    </ul>
  )
}

function esMayorDe5(pass) {
  return pass.length > 5
}

function sonIguales(pass, confirmacion) {
  return pass === confirmacion
}

function esValido(pass, confirmacion) {
  return esMayorDe5(pass) && sonIguales(pass, confirmacion)
}

function validarEmail(email) {
  let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  return regex.test(email);
}