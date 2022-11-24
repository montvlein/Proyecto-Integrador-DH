import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGauge,
  faGasPump,
  faGear,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import style from "./cards.module.css";


const Card = ({ id, nombre, imagenes, descripcion, precio, caracteristica }) => {
  let portada = imagenes[0].url
  return (
    <section className="contenedorTodasLasCards">
      <div className="card Small shadow">
      <FontAwesomeIcon icon={faHeart} className={style.icon}/>
        <img src={portada} alt="auto" className={style.imagenAuto}/>
        
        <div className="card-body">
          <h4 className="card-title">{nombre} <span className="h6">{caracteristica.modelo}</span></h4>
          <div className={style.caracteristicas}>
            <div className={style.caracteristicasDIV}>
              <FontAwesomeIcon icon={faPerson} className={style.icons} />
              <p>{caracteristica.puertas} Personas</p>
            </div>
            <div className={style.caracteristicasDIV}>
              <FontAwesomeIcon icon={faGauge} className={style.icons} />
              <p>{caracteristica.consumo}</p>
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
          
          <div className={style.contenedorDescripcion}><p className={`${style.cardDescripcion}card-text text-secondary`}>{descripcion}</p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className={style.contenedorPrecio}>
            <p>
              {precio} ARS / <span>Mensual</span>
            </p>
          </div>
          <Link to={`/producto/${id}`} className="btn btn-warning">
            ¡Alquilar ahora!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
