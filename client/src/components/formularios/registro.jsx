import React, { useState, useContext, useEffect } from "react";
import styles from "./formularios.module.css";
import Contexto from "../../contexto/AppContext";
import { Link, useNavigate } from "react-router-dom"
import { DigitalBookingApi } from "../../data/conexionAPI";

const Registro = () => {
  const redirigir = useNavigate()
  const { iniciarSesion, setEnEspera } = useContext(Contexto)
  const [esMenorQue5, setEsMenorQue5] = useState(false)
  const [sonDiferentes, setSonDiferentes] = useState(false)
  const [mailInvaldio, setMailInvalido] = useState(false)
  const [errorAlRegistrar, setErrorAlRegistrar ] = useState(false)

  function registrarUsuario(usuario) {
    setEnEspera(true)
    DigitalBookingApi.usuario.crear(usuario)
    .then( respuestaUsuario => {
      if (respuestaUsuario.status == 201) {
        iniciarSesion(usuario)
        return respuestaUsuario
      }
    })
    .then( data => data.json() )
    .then( auth => {
        localStorage.setItem("DigitalToken", auth.token )
        setEnEspera(false)
        redirigir("/")
      })
    .catch(e => {
      setErrorAlRegistrar(true)
      setEnEspera(false)
    })
  }

  function enviarRegistro(evento) {
    evento.preventDefault()
    let [nombre, apellido, email, contrasenia, confirmacion] = [evento.target.elements.nombre.value, evento.target.elements.apellido.value, evento.target.elements.email.value, evento.target.elements.password.value, evento.target.elements.confirmacion.value]
    if (!esMayorDe5(contrasenia)) { setEsMenorQue5(true) } else { setEsMenorQue5(false)}
    if (!sonIguales(contrasenia, confirmacion)) { setSonDiferentes(true)} else { setSonDiferentes(false)}
    if (esEmailValido(email)) { setMailInvalido(false) } else { setMailInvalido(true) }
    if (esValido(contrasenia, confirmacion, email)) {
      registrarUsuario({ nombre, apellido, email, contrasenia })
    }
  }
  return (
    <div className={styles.divContainer}>
    { errorAlRegistrar?<p className="text-danger m-1">Lamentablemente no ha podido registrarse. Por favor intente ma's tarde</p>:null }
    <form className={styles.formularioContainer} autoComplete="off" onSubmit={enviarRegistro} method="POST">
        <div className={styles.contenidoFormulario}>
          <h3 className={styles.tituloFormulario}>Crear cuenta</h3>
          <p className="text-center mt-2">
            ¿Ya tienes una cuenta? <Link to="/iniciarSesion">Iniciar sesión</Link>
          </p>

          <div className="d-flex">

            <div>

              <div className="row">
                <div className="form-group col-6">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Micaela"
                    name="nombre"
                    required
                  />
                </div>
                <div className="form-group col-6">
                  <label>Apellido</label>
                  <input
                    type="text"
                    className="form-control"
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
                  placeholder="usuario@digitalhouse.com.ar"
                  name="email"
                  required
                />
              </div>
              { mailInvaldio? <p className="text-danger m-1">correo invalido</p>:null }
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
                { esMenorQue5?<p className="text-danger m-1">La contraseña debe tener más de 6 caracteres</p>:null }
                { sonDiferentes?<p className="text-danger m-1">Las contraseñas no coinciden</p>:null }
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className={styles.botonFormulario}>
                  Crear cuenta
                </button>
              </div>

            </div>

            <div className={styles.separador}></div>

            <div>

                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <div id="g_id_onload"
                    data-client_id="YOUR_GOOGLE_CLIENT_ID"
                    data-login_uri="https://your.domain/your_login_endpoint"
                    data-auto_prompt="false">
                </div>
                <button>boton</button>
                <div class="g_id_signin"
                    data-type="standard"
                    data-size="large"
                    data-theme="outline"
                    data-text="sign_in_with"
                    data-shape="rectangular"
                    data-logo_alignment="left">
                </div>

            </div>

          </div>

        </div>
      </form>
    </div>
  );
};

export default Registro;

function esMayorDe5(pass) {
  return pass.length > 5
}

function sonIguales(pass, confirmacion) {
  return pass === confirmacion
}

function esValido(pass, confirmacion, email) {
  return esMayorDe5(pass) && sonIguales(pass, confirmacion) && esEmailValido(email)
}

function esEmailValido(email) {
  let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]");
  return regex.test(email);
}