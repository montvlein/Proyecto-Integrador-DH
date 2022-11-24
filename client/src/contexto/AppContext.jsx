import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { DigitalBookingApi } from "../data/conexionAPI";
import { Busqueda } from "../modelos/criterioBusqueda";
import { Reserva } from "../modelos/reserva";
import { Usuario } from "../modelos/usuario";

const Contexto = createContext();


export function AppContext({ children }) {

  const [ enEspera, setEnEspera ] = useState(false)
  const body = document.querySelector("html").classList

  useEffect(()=>{
    body.toggle("loading_cursor")
  },[enEspera])

  // usuario y sesion
  const [token, setToken] = useState(localStorage.getItem("DigitalToken"))
  const [usuario, setUsuario] = useState(new Usuario);

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

  function setUbicacionUsuario(lugar) {
    usuario.ciudad = lugar
  }

  function iniciarSesion(usuario) {
    setUsuario(usuario)
  }

  function estaLaSesionIniciada() {
    return usuario?.email?.length > 0;
  }

  function cerrarSesion() {
    localStorage.removeItem("DigitalToken")
    setUsuario(new Usuario);
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

  const [sinUsuarioParaReserva, setSinUsuarioParaReserva] = useState(false);
  const [ultimaConsultaPreviaReservar, setUltimaConsultaPreviaReservar] = useState()

  function getSinUsuarioParaReserva() {
    return sinUsuarioParaReserva
  }

  function getUltimaConsultaPreviaReservar() {
    return ultimaConsultaPreviaReservar
  }

  return (
    <Contexto.Provider
      value={{
        setEnEspera,

        getUsuario,
        iniciarSesion,
        estaLaSesionIniciada,
        cerrarSesion,
        setUbicacionUsuario,

        getListaAutos,
        getEstaFiltadoListadoAutos,
        getCriterioFiltro,
        limpiarFiltro,

        setFechaInicioBusqueda,
        setFechaFinalBusqueda,
        setCiudadBusqueda,
        busqueda,
        setBusqueda,

        // setFechaInicialReserva,
        // setFechaFinalReserva,
        // getFechaReservaFinal,

        getSinUsuarioParaReserva,
        setSinUsuarioParaReserva,
        setUltimaConsultaPreviaReservar,
        getUltimaConsultaPreviaReservar

      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default Contexto;
