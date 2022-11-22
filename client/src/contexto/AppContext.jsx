import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { DigitalBookingApi } from "../data/conexionAPI";

const Contexto = createContext();

export function AppContext({ children }) {
  // Reserva

  // usuario y sesion
  const [token, setToken] = useState(localStorage.getItem("DigitalToken"))
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [usuario, setUsuario] = useState();

  useEffect(()=>{
    if (token) {
      DigitalBookingApi.usuario.infoToken(token)
      .then(usuario => {
        iniciarSesion(usuario)
      })
    }
  },[])

  function getUsuario() {
    return usuario;
  }

  function iniciarSesion(usuario) {
    setUsuario(usuario)
    setSesionIniciada(true)
  }

  function estaLaSesionIniciada() {
    return sesionIniciada;
  }

  function cerrarSesion() {
    localStorage.removeItem("DigitalToken")
    setUsuario({});
    setSesionIniciada(false);
  }

  // listado de productos
  const [listaAutos, setListadoAutos] = useState([])
  const [autosFiltrados, setAutosFiltrados] = useState(listaAutos)
  const [estaFiltadoListadoAutos, setEstaFiltadoListadoAutos] = useState(false)
  const [criterioFiltro, setCriterioFiltro] = useState()
  useEffect(()=>{
      DigitalBookingApi.auto
      .listar()
      .then( lista => setListadoAutos(lista))
  },[])

  function getListaAutos() {
    return listaAutos
  }

  function getAutosFiltrados() {
    return autosFiltrados
  }

  function filtarAutos(criterio) {
    let filtrados = listaAutos.filter( auto => auto.categoria === criterio)
    setAutosFiltrados(filtrados)
    setEstaFiltadoListadoAutos(true)
    setCriterioFiltro(criterio)
  }

  function limpiarFiltro() {
    setAutosFiltrados(listaAutos)
    setEstaFiltadoListadoAutos(false)
  }

  function getEstaFiltadoListadoAutos() {
    return estaFiltadoListadoAutos
  }

  function getCriterioFiltro() {
    return criterioFiltro
  }

  return (
    <Contexto.Provider
      value={{
        getUsuario,
        iniciarSesion,
        estaLaSesionIniciada,
        cerrarSesion,
        getListaAutos,
        getAutosFiltrados,
        filtarAutos,
        getEstaFiltadoListadoAutos,
        getCriterioFiltro,
        limpiarFiltro
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default Contexto;
