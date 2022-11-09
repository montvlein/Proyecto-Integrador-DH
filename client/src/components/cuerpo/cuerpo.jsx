import styles from "./cuerpo.module.css";
import SearchBar from "./barraBusqueda/searchCiudad";
import FechaReserva from "./barraBusqueda/fechaReserva";
import Heroe from "./heroe/heroe";
import Categorias from "../Categorias/categorias";
import Recomendados from "../cardsAutos/recomendados";

const Index = () => {
  function handlerSubmit(evento) {
    evento.preventDefault();
  }

  return (
    <main>
      <Heroe />

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

      <Categorias />
      <Recomendados />
    </main>
  );
};

export default Index;
