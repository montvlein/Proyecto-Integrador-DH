import style from "./filtro.module.css"

export default function Filtro() {
  return(
    <aside className={`${style.aside}`}>
      <h4>Filtros</h4>
      <details>
        <summary>Ciudad</summary>
        <ul>
          <li>criterio desplegable</li>
        </ul>
      </details>
      <details>
        <summary>Categoria</summary>
        <ul>
          <li>criterio desplegable</li>
        </ul>
      </details>
      <details>
        <summary>Fecha</summary>
        <ul>
          <li>criterio desplegable</li>
        </ul>
      </details>
    </aside>
  )
}