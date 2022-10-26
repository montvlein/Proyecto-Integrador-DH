import { useContext } from "react";
import Contexto from "../../contexto/AppContext"
import { Link } from 'react-router-dom'
import UsuarioIniciado from "./sesionIniciada";

function Sesion() {
    const { estaLaSesionIniciada } = useContext(Contexto);

    if(estaLaSesionIniciada()) {
        return (
            <UsuarioIniciado/>
            )
    } else {
        return (
            <div class="text-end">
                <Link to="/iniciarSesion" class="btn btn-outline-light me-2">Inicia sesión</Link>
                <Link to="/crearcuenta" class="btn btn-warning">Registrate</Link>
            </div>
        )
    }


}

export default Sesion;