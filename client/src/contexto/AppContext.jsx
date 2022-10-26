import React, { useState, createContext } from "react";
import categorias from "../data/categorias.json"
import { Usuario } from "../modelos/usuario.js"
const Contexto = createContext()

export function AppContext({children}) {
    // usuario y sesion
    const [ sesionIniciada, setSesionIniciada ] = useState(false)
    const [ usuario, setUsuario ] = useState()

    function getUsuario() { return usuario }
    function estaLaSesionIniciada() {return sesionIniciada}
    function iniciarSesion(mail, pass) {
        let usuario = new Usuario("Maigualida","Delgado", mail)
        setUsuario(usuario)
        setSesionIniciada(true)
    }
    function cerrarSesion() {
        setUsuario({})
        setSesionIniciada(false)
    }

    // categorias
    const [ listaCategorias, setCategorias ] = useState(categorias)
    function getListaCategorias() { return listaCategorias }

    return(
        <Contexto.Provider value={{ getUsuario, estaLaSesionIniciada, iniciarSesion, cerrarSesion, getListaCategorias }}>
            {children}
        </Contexto.Provider>
    )
}

export default Contexto