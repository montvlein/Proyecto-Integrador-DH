import React, { useState, createContext } from "react";
import { useEffect } from "react";
import listado from "../data/AUTOS.json";
import { DigitalBookingApi } from "../data/conexionAPI";

const Contexto = createContext();

export function AppContext({ children }) {
  // Reserva

  // usuario y sesion
  const [token, isToken] = useState(localStorage.getItem("DigitalToken"))
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [usuario, setUsuario] = useState();

  useEffect(()=>{
    if (token) {
      isToken(true)
      usuario?null:setUsuario({nombre:"test", apellido: "iando"}) // borrar esta linea. porque genera que el usuario siempre sea el mismo
      setSesionIniciada(true)
    }
  },[token])

  function getUsuario() {
    return usuario;
  }

  function estaLaSesionIniciada() {
    return sesionIniciada;
  }

  function cerrarSesion() {
    localStorage.removeItem("DigitalToken")
    isToken(false)
    setUsuario({});
    setSesionIniciada(false);
  }

  // listado de productos
  const [listaAutos, setListadoAutos] = useState(listado.autos)
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
        setUsuario,
        isToken,
        setSesionIniciada,
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
