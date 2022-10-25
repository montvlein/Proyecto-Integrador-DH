import { useContext } from "react";
import Contexto from "../../contexto/AppContext"

function BotonIniciarSesion() {
    const { iniciarSesion } = useContext(Contexto)

    return (
        <a class="btn btn-outline-light me-2" onClick={iniciarSesion} >Inicia sesión</a>
    )
}

export default BotonIniciarSesion;