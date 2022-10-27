import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGauge,
  faGasPump,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import style from "../../styles/cards.module.css";

const Card = ({ id, titulo, imagen, descripcion }) => {
  return (
    <section className="contenedorTodasLasCards">
      <div className="card">
        <img src={imagen[0]} alt="autito" />
        <div className="card-body">
          <h4 className="card-title">{titulo}</h4>
          <div className={style.caracteristicas}>
            <p>
              <FontAwesomeIcon icon={faPerson} className={style.icons} /> 4
              personas
            </p>
            <p>
              <FontAwesomeIcon icon={faGauge} className={style.icons} /> 50
              Litros
            </p>
            <p>
              <FontAwesomeIcon icon={faGasPump} className={style.icons} /> Nafta
            </p>
            <p>
              <FontAwesomeIcon icon={faCar} className={style.icons} />{" "}
              Automático
            </p>
          </div>
          <p className="card-text text-secondary">{descripcion}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className={style.contenedorPrecio}>
            <p>
              $$$ ARS / <span>Mensual</span>
            </p>
          </div>
          <Link to="" className="btn btn-warning">
            ¡Alquilar ahora!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
