import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { DigitalBookingApi } from "../data/conexionAPI";
import { Busqueda } from "../modelos/criterioBusqueda";
import { Reserva } from "../modelos/reserva";

const Contexto = createContext();

export function AppContext({ children }) {

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

  // buscador

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

  // buscador por fecha
  const [busqueda, setBusqueda] = useState(new Busqueda)

  function setFechaInicioBusqueda(fecha){
    busqueda.fechaInicio = fecha
  }

  function setFechaFinalBusqueda(fecha) {
    busqueda.fechaFinal = fecha
  }

  function setCiudadBusqueda(ubicacion) {
    busqueda.ubicacion = ubicacion
  }

  function setCategoriaBusqueda(categoria) {
    busqueda.categoria = categoria
  }

  // reserva
  const [reserva, setReserva] = useState(new Reserva())

  return (
    <Contexto.Provider
      value={{
        getUsuario,
        iniciarSesion,
        estaLaSesionIniciada,
        cerrarSesion,

        getListaAutos,
        getEstaFiltadoListadoAutos,
        getCriterioFiltro,
        limpiarFiltro,

        setFechaInicioBusqueda,
        setFechaFinalBusqueda,
        setCiudadBusqueda,
        busqueda,
        setBusqueda

      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default Contexto;
