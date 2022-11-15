import styles from "./formularios.module.css";
import { useContext, useState } from "react";
import Contexto from "../../contexto/AppContext"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const redirigir = useNavigate()
  const { iniciarSesion, validarUsuario } = useContext(Contexto)
  const [invalido, setInvalido] = useState(false)

  const handleSubmit = function (e) {
    e.preventDefault()
    let [mail, pass] = [e.target.elements.email.value, e.target.elements.password.value]
    if (validarUsuario(mail, pass)) {
      iniciarSesion(mail)
      redirigir("/")
    } else {
      setInvalido(true)
    }
  }

  if (invalido) {
    return(
      <div className={styles.divContainer}>
        <Formulario ingresar={handleSubmit}/>
        <Errores/>
      </div>
    )
  }

    return(
      <div className={styles.divContainer}>
        <Formulario ingresar={handleSubmit}/>
      </div>
    )
  }

export default Login;

function Formulario({ingresar}) {
  return(
    <form className={styles.formularioContainer} onSubmit={ingresar} method="POST">
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
  )
}

function Errores() {
  return(
    <ul className={styles.error}>
        <li >Por favor vuelva a intentarlo, sus credenciales son inválidas</li>
    </ul>
  )
}
