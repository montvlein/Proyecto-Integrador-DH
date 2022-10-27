import React, { useState, createContext } from "react";
import categorias from "../data/categorias.json"
import { Usuario } from "../modelos/usuario.js"
const Contexto = createContext()

export function AppContext({children}) {
    let opciones = (informacion, metodo='POST', tipo='application/json') => {
        return {
            method: metodo,
            headers: {
                'Content-Type': tipo
            },
            body: JSON.stringify(informacion)
        }
    }

    // usuario y sesion
    const [ listaUsuarios, setListaUsuarios ] = useState([])
    const [ sesionIniciada, setSesionIniciada ] = useState(false)
    const [ usuario, setUsuario ] = useState()
    function getUsuario() { return usuario }
    function getListaUsuarios() { return listaUsuarios }
    function estaLaSesionIniciada() {return sesionIniciada}

    function registrarUsuario(usuario) {
        getListaUsuarios().push(usuario)
        console.table(getListaUsuarios())
        setUsuario(usuario)
        setSesionIniciada(true)
    }

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
        <Contexto.Provider value={{ getUsuario, estaLaSesionIniciada, iniciarSesion, cerrarSesion, getListaCategorias,registrarUsuario }}>
            {children}
        </Contexto.Provider>
    )
}

export default Contexto