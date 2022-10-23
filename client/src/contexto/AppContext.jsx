import React, { useState, createContext } from "react";

const Contexto = createContext()

export function AppContext({children}) {
    const [ sesionIniciada, setSesionIniciada ] = useState(false)
    const [ usuario, setUsuario ] = useState()

    function getUsuario() { return usuario }
    function estaLaSesionIniciada() {return sesionIniciada}
    function iniciarSesion() {
        let usuario = {nombre: "Maigualida",apellido: "Delgado"}
        setUsuario(usuario)
        setSesionIniciada(true)
    }
    function cerrarSesion() {
        setUsuario({})
        setSesionIniciada(false)
    }

    return(
        <Contexto.Provider value={{ getUsuario, estaLaSesionIniciada, iniciarSesion, cerrarSesion }}>
            {children}
        </Contexto.Provider>
    )
}

export default Contexto