import styles from "./formularios.module.css";
import { useContext, useState } from "react";
import Contexto from "../../contexto/AppContext"
import { Link, useNavigate } from "react-router-dom"
import { DigitalBookingApi } from "../../data/conexionAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const redirigir = useNavigate()
  const { iniciarSesion, setEnEspera, getSinUsuarioParaReserva, setSinUsuarioParaReserva, getUltimaConsultaPreviaReservar } = useContext(Contexto)
  const [invalido, setInvalido] = useState(false)


  const handleSubmit = function (e) {
    setEnEspera(true)
    e.preventDefault()
    let [email, contrasenia] = [e.target.elements.email.value, e.target.elements.password.value]
    DigitalBookingApi.usuario.login({email,contrasenia})
    .then( auth => {
      localStorage.setItem("DigitalToken", auth.token )
      DigitalBookingApi.usuario.infoToken(auth.token)
        .then(usuario => {
          setEnEspera(false)
          iniciarSesion(usuario)
          getSinUsuarioParaReserva()?redirigir(getUltimaConsultaPreviaReservar()):redirigir("/")
          setSinUsuarioParaReserva(false)
        })
      })
    .catch(e => {
      setInvalido(true)
    })
  }
    return(
      <div className={styles.divContainer}>

        {invalido?<p className={styles.textError}>Lamentablemente no ha podido iniciar sesión. Por favor, intente más tarde</p>:null}
        {getSinUsuarioParaReserva() ? <p className={styles.textError}><span><FontAwesomeIcon
          icon={faCircleExclamation}
        /></span>   Para iniciar una reserva debe estar iniciado</p> : null}


        <form className={styles.formularioContainer} onSubmit={handleSubmit} method="POST">
          <div className={styles.contenidoFormulario}>
            <h3 className={styles.tituloFormulario}>Iniciar Sesión</h3>
            <div className="form-group mt-3">
              <label>Correo electrónico</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Ingresa tu e-mail"
                name="email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingresa tu contraseña"
                name="password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className={styles.botonFormulario}>
                Ingresar
              </button>
            </div>
            <p className="text-center mt-2">
                ¿Aún no tenes cuenta? <Link to="/crearCuenta">Registrate</Link>
            </p>
          </div>
        </form>
      </div>
    )
  }

export default Login;
