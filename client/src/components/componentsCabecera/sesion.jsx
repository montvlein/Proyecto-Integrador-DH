import { useState } from "react";
import BotonIniciarSesion from "./botonIniciar";
import BotonRegistrar from "./botonRegistrar";
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
            <div className="text-end"> 
            <BotonIniciarSesion props={iniciarSesion}/>
            <BotonRegistrar/>
            </div>
        )
    }


}

export default Sesion;