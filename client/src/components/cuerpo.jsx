import styles from "../styles/cuerpo.module.css";
import SearchBar from "./barraBusqueda/searchCiudad";
import FechaReserva from "./barraBusqueda/fechaReserva";
import Heroe from "./heroe";
import Categorias from "./Categorias/categorias";

const Cuerpo = () => {
  return (
    <main>
      <Heroe />

      <form className="d-flex justify-content-center">
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

        <Categorias />

    </main>
  );
};

export default Cuerpo;

/*BODY: BACKGROUND COLOR + 100*/
