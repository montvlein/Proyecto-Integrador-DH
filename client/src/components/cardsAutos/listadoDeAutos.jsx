import Card from "./card";
import { autos } from "../../data/AUTOS.json";
import style from "../../styles/cards.module.css";

const ListadoDeAutos = () => {
  return (
    <div className="container">
      <div className={style.tituloCards}>
        <div>
          <h3>Recomendaciones</h3>
        </div>
        <div>
        </div>
      </div>
      <div className="row gy-4">
        {autos.map((auto) => (
          <div className="col-md-4" key={auto.id}>
            <Card {...auto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListadoDeAutos;
