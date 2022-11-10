import Card from "./card";
import style from "./cards.module.css";
import { useContext } from "react";
import Contexto from "../../contexto/AppContext";
import { Link } from "react-router-dom";

const ListadoDeAutos = () => {
  const { getAutosFiltrados, getEstaFiltadoListadoAutos, getCriterioFiltro, limpiarFiltro  } = useContext(Contexto)
  if (getEstaFiltadoListadoAutos()) {
    return (
      <div className={`container ${style.vp90}`}>
        <div className={style.tituloCards}>
          <div>
            <h3>{getCriterioFiltro()}</h3>
          </div>
          <Link to={"/"}>Volver</Link>
        </div>
        <div className="row gy-4">
          {getAutosFiltrados().length==0?
          <p className="m-5">No es encontraron resultados</p>:
          getAutosFiltrados().map((auto) =>(
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
    <div className={`container ${style.vp90}`}>
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
        ))}
      </div>
    </div>
  );
};

export default ListadoDeAutos;
