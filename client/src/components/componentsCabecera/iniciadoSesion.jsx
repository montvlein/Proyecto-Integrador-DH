import { useState } from "react";
import UsuarioIniciado from "./sesionIniciada";



function Sesion() {
    const [sesion, setSesion] = useState(false);
    const usuario = {nombre: "Maigualida",
                    apellido: "Delgado"}

    function iniciarSesion() {
        setSesion(true);
    };

    function cerrarSesion() {
        setSesion(false);
    };

    if(sesion) {
        return (
            <UsuarioIniciado props={cerrarSesion} usuario={usuario}/>
            )
    } else {
        return (
            <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2" onClick={iniciarSesion}>Inicia sesión</button>
            <button type="button" class="btn btn-warning">Registrate</button>
          </div>
        )
    }


}

export default Sesion;