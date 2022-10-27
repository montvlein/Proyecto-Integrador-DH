import Card from "./card";
import style from "../../styles/cards.module.css";
import { useContext, useState } from "react";
import Contexto from "../../contexto/AppContext";

const ListadoDeAutos = () => {
  const { getAutosFiltrados, getEstaFiltadoListadoAutos, getCriterioFiltro, limpiarFiltro  } = useContext(Contexto)

  if (getEstaFiltadoListadoAutos()) {
    return (
      <div className="container">
        <div className={style.tituloCards}>
          <div>
            <h3>{getCriterioFiltro()}</h3>
          </div>
          <button onClick={limpiarFiltro} className="btn btn-warning">volver</button>
        </div>
        <div className="row gy-4">
          {getAutosFiltrados().map((auto) =>(
              <div className="col-md-4" key={auto.id}>
              <Card {...auto} />
            </div>
          )
          )
        }
        </div>
      </div>
    )
  }
  return (
    <div className="container">
      <div className={style.tituloCards}>
        <div>
          <h3>Recomendaciones</h3>
        </div>
      </div>
      <div className="row gy-4">
        {getAutosFiltrados().map((auto) =>(
            <div className="col-md-4" key={auto.id}>
            <Card {...auto} />
          </div>
        )
        )
      }
      </div>
    </div>
  );
};

export default ListadoDeAutos;
