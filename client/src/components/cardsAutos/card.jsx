import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPerson, faGauge, faGasPump, faCar
  } from "@fortawesome/free-solid-svg-icons";

import style from "../../styles/cards.module.css" 


const Card = ({id, titulo, imagen, descripcion}) => {
    console.log(id, titulo, imagen, descripcion)
    return(
        <section className="contenedorTodasLasCards">
        <div className="card">
        <img src={imagen[0]} alt="autito"/>
            <div className="card-body">
                <h4 className="card-title">{titulo}</h4>
                <div className={style.caracteristicas}>
                        <p><FontAwesomeIcon icon={faPerson} className={style.icons}/> 4 personas</p>
                        <p><FontAwesomeIcon icon={faGauge} className={style.icons}/> 6.1 km / 1 litro</p>
                        <p><FontAwesomeIcon icon={faGasPump} className={style.icons}/> Nafta</p>
                        <p><FontAwesomeIcon icon={faCar} className={style.icons}/> Automático</p>
                </div>
                <p className="card-text text-secondary">{descripcion}</p>
            </div>
        </div>
    </section>
    )
}

export default Card;