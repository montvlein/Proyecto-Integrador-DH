import { useContext } from "react";
import Contexto from "../../contexto/AppContext"
import { Link, useLocation } from 'react-router-dom'
import UsuarioIniciado from "./sesionUsuario";

function Sesion() {
    const { estaLaSesionIniciada } = useContext(Contexto);
    const location = useLocation()


    if(estaLaSesionIniciada()) {
        return (
            <UsuarioIniciado/>
            )
    } else {
        return (
            <div class="text-end">
                <Link to="/iniciarSesion" className={ location.pathname === "/iniciarSesion" ? "d-none btn btn-outline-light me-2":"btn btn-outline-light me-2"}>Inicia sesión</Link>
                <Link to="/crearcuenta" className={ location.pathname === "/crearcuenta" ? "d-none btn btn-warning":"btn btn-warning"}>Registrate</Link>
            </div>
        )
    }


}

export default Sesion;