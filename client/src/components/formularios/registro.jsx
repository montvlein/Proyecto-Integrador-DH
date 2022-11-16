import React, { useState, useContext, useEffect } from "react";
import styles from "./formularios.module.css";
import Contexto from "../../contexto/AppContext";
import { Link, useNavigate } from "react-router-dom"

const Registro = () => {
  const redirigir = useNavigate()
  const { registrarUsuario } = useContext(Contexto)
  const [esMenorQue5, setEsMenorQue5] = useState(false)
  const [sonDiferentes, setSonDiferentes] = useState(false)

  // useEffect(()=>{
  //   registrarUsuario({ nombre, apellido, email, contrasenia })
  //   .then((respuestaUsuario)=> {
  //     respuestaUsuario.ok?redirigir("/"):alert("Lamentablemente no ha podido registrarse. Por favor intente ma's tarde")
  //     return respuestaUsuario.json()
  //   })
  //   .then(datos => console.log(datos))
  // },[])

  function enviarRegistro(evento) {
    evento.preventDefault()
    let [nombre, apellido, email, contrasenia, confirmacion] = [evento.target.elements.nombre.value, evento.target.elements.apellido.value, evento.target.elements.email.value, evento.target.elements.password.value, evento.target.elements.confirmacion.value]
    if (!esMayorDe5(contrasenia)) { setEsMenorQue5(true) } else { setEsMenorQue5(false)}
    if (!sonIguales(contrasenia, confirmacion)) { setSonDiferentes(true)} else { setSonDiferentes(false)}
    if (!validarEmail(email)) {}
    if (esValido(contrasenia, confirmacion)) {
      registrarUsuario({ nombre, apellido, email, contrasenia })
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

export default Registro;

function Formulario({registrar}) {

  return(
    <form className={styles.formularioContainer} autoComplete="off" onSubmit={registrar} method="POST">
        <div className={styles.contenidoFormulario}>
          <h3 className={styles.tituloFormulario}>Crear cuenta</h3>

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
            ¿Ya tienes una cuenta? <Link to="/iniciarSesion">Iniciar sesión</Link>
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