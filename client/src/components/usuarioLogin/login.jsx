import styles from "../../styles/formularios.module.css";


const Login = () => {
    return(
        <div className={styles.divContainer}>
        <form className={styles.formularioContainer}>
          <div className={styles.contenidoFormulario}>
            <h3 className={styles.tituloFormulario}>Iniciar Sesión</h3>
            <div className="form-group mt-3">
              <label>Correo electrónico</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Ingresa tu e-mail"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className={styles.botonFormulario}>
                Ingresar
              </button>
            </div>
            <p className="text-center mt-2">
                ¿Aún no tenes cuenta? <a href="/crearCuenta">Registrate</a> {/*agregar ruta de registro*/}
            </p>
          </div>
        </form>
      </div>
    )
  }


export default Login;




/*
Validaciones en inputs: El formulario debe validar que:

El campo de email sea un email válido
Que la contraseña tenga más de 6 caracteres.
Que las contraseñas coincidan

Botón Crear Cuenta: Al dar click que funcione la validación. Para esto almacenar un correo electrónico y contraseña de prueba en un objeto y comparar con estos datos los datos ingresados.
Credenciales inválidas: Si falla la validación el formulario debe indicar “Por favor vuelva a intentarlo, sus credenciales son inválidas”.
Credenciales válidas: Se simulará que el usuario está logueado. Desaparecerá el formulario de login volveremos a la Home inicial pero en el header a la derecha, en vez de ver los botones de inicio de sesión y registro veremos: Hola [nombre_de_usuario], un link de cerrar sesión y un avatar circular con las iniciales del usuario.

*/