import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGauge,
  faGasPump,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import style from "./cards.module.css";

const Card = ({ id, nombre, imagen, descripcion, precio, caracteristica }) => {
  let portada =
    "https://cdn-images.motor.es/image/m/720w/fotos-noticias/2021/08/chevrolet-onix-ventas-sudamerica-202180513-1629451453_3.jpg";
  return (
    <section className="contenedorTodasLasCards">
      <div className="card">
        <img src={portada} alt="autito" />
        <div className="card-body">
          <h4 className="card-title">{nombre} <span className="h6">{caracteristica.modelo}</span></h4>
          <div className={style.caracteristicas}>
            <div className={style.caracteristicasDIV}>
              <FontAwesomeIcon icon={faPerson} className={style.icons} />
              <p>{caracteristica.puertas} Personas</p>
            </div>
            <div className={style.caracteristicasDIV}>
              <FontAwesomeIcon icon={faGauge} className={style.icons} />
              <p>5km/ 1-Litros {caracteristica.consumo}</p>
            </div>
            <div className={style.caracteristicasDIV}>
              <FontAwesomeIcon icon={faGasPump} className={style.icons} />
              <p>{caracteristica.tipoMotor}</p>
            </div>
            <div className={style.caracteristicasDIV}>
              <FontAwesomeIcon icon={faGear} className={style.icons} />
              <p>{caracteristica.caja}</p>
            </div>
          </div>
          <p className="card-text text-secondary">{descripcion}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className={style.contenedorPrecio}>
            <p>
              {precio} ARS / <span>Mensual</span>
            </p>
          </div>
          <Link to={`producto/${id}`} className="btn btn-warning">
            ¡Alquilar ahora!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
