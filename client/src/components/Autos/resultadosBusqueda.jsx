import Card from "./card";
import style from "./cards.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filtro from "../Filtro/asideFiltro";
import { DigitalBookingApi } from "../../data/conexionAPI";
import { useSearchParams } from "react-router-dom";

const ResultadosBusqueda = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [cargando, setEstaCargando] = useState(true);
    const [filtrados, setFiltrados] = useState([]);

    const parametros = Object.fromEntries([...searchParams])

    useEffect(()=>{
        DigitalBookingApi.auto.filtrarPor(parametros)
        .then((autos) => {
            setFiltrados(autos)
            setEstaCargando(false);
        })
    }, [])

  if (!cargando) {
    return (
      <div className={`container ${style.vp90}`}>
        <div className={style.tituloCards}>
          <div>
            <h3>Resultados...</h3>
          </div>
          <Link to={"/"}>Volver</Link>
        </div>
        <div className="d-flex">
            <Filtro />
            <section className={`d-flex flex-wrap ${style.mostrarResultadosFiltro}`}>
                {filtrados.length == 0 ? (
                    <p className="m-5">No es encontraron resultados</p>
                ) : (
                    filtrados.map((auto) => (
                    <div className="col-md-4" key={auto.id}>
                        <Card {...auto} />
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
