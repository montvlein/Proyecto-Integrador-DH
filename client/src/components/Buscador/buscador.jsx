import styles from "../cuerpo/cuerpo.module.css";
import SearchBar from "../cuerpo/barraBusqueda/searchCiudad";
import FechaReserva from "../cuerpo/barraBusqueda/fechaReserva";


export default function Buscador() {

  function handlerSubmit(evento) {
    evento.preventDefault();
    if (evento.target.buscadorCiudad.value.split(",").length > 1) {
        redirigir(`buscar?ciudad=${evento.target.buscadorCiudad.value.split(",")[0]}`)
    }
  }

  return (
    <form className="d-flex justify-content-center" onSubmit={handlerSubmit}>
      <div className={styles.barraBusqueda}>
        <div className={styles.contenedorBuscador}>
          <SearchBar />
        </div>
        <div className={styles.contenedorFechas}>
          <FechaReserva />
        </div>
        <div className={styles.botonNavBuscador}>
            <button className={styles.botonBarra}>Buscar</button>
        </div>
      </div>
    </form>
  );
}
