import style from "./filtro.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faLocationDot,
  faCalendar, faCaretDown
} from "@fortawesome/free-solid-svg-icons";



export default function Filtro() {
  return(
    <aside className={style.aside}>
      <h4>Filtros</h4>
      <details>
        <summary className={style.summary}><FontAwesomeIcon icon={faLocationDot} className={style.icons} /> Ciudad</summary>
        <ul>
          <li>criterio desplegable</li>
        </ul>
      </details>
      <details>
        <summary className={style.summary}><FontAwesomeIcon icon={faCar} className={style.icons} /> Categoria</summary>
        <ul>
          <li>criterio desplegable</li>
        </ul>
      </details>
      <details>
        <summary className={style.summary}><FontAwesomeIcon icon={faCalendar} className={style.icons} /> Fecha</summary>
        <ul>
          <li>criterio desplegable</li>
        </ul>
      </details>
    </aside>
  )
}