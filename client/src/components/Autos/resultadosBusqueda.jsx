import Card from "./card";
import Card2 from "./Prueba/card2"
import style from "./cards.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filtro from "../Filtro/asideFiltro";
import { DigitalBookingApi } from "../../data/conexionAPI";
import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../../contexto/AppContext";
import { Busqueda } from "../../modelos/criterioBusqueda";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const ResultadosBusqueda = () => {
    const {setBusqueda} = useContext(Contexto)
    const redirigir = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [cargando, setEstaCargando] = useState(true);
    const [filtrados, setFiltrados] = useState([]);

    const parametros = Object.fromEntries([...searchParams])

    function volver() {
      setBusqueda(new Busqueda)
      redirigir("/")
    }

    useEffect(()=>{
        DigitalBookingApi.auto.filtrarPor(parametros)
        .then((autos) => {
            setFiltrados(autos)
            setEstaCargando(false);
        })
    }, [])

  if (!cargando) {
    return (
      <div className={`container ${style.contenedorPadre}`}>
        <div className={style.tituloCards}>
          <button className={`btn btn-warning ${style.botonVolver}`} onClick={volver}><FontAwesomeIcon
          icon={faAngleLeft}
        /></button>
          <div className={style.divtitulo}>
            <h3>Resultado de tu búsqueda</h3>
          </div>
        </div>
        <div className={`d-flex ${style.contenedorResultadoPadre}`}>
            <Filtro />
            <section className={`${style.mostrarResultadosFiltro}`}>
                {filtrados.length == 0? (
                    <div className={`${style.vp90}`}><p className="m-5">No es encontraron resultados</p></div>
                ) : (
                    filtrados.map((auto) => (
                    <div className={style.contenedorCard} key={auto.id}>
                        <Card2 {...auto} />
                    </div>
                    ))
                )}
            </section>
      </div>
      </div>
    );
  }

  return (
    <div className={`container ${style.vp90}`}>
      <div className={style.tituloCards}>
        <div>
          <h3>Resultado de busqueda</h3>
        </div>
      </div>
      <div className="d-flex">
        <Filtro />
        <section className="d-flex justify-content-center w-100">
          <div className="spinner-border m-5" roler="status"></div>
        </section>
      </div>
    </div>
  );
};

export default ResultadosBusqueda;
