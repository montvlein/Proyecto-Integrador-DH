import { useContext } from "react";
import Contexto from "../../contexto/AppContext"
import BotonIniciarSesion from "./botonIniciar";
import BotonRegistrar from "./botonRegistrar";
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
            <BotonIniciarSesion/>
            <BotonRegistrar/>
            </div>
        )
    }


}

export default Sesion;