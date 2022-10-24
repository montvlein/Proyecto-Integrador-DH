import styles from "../styles/cuerpo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./barraBusqueda/searchCiudad";
import FechaReserva from "./barraBusqueda/fechaReserva";
import Categorias from "./Categorias/categorias";

const Cuerpo = () => {
  return (
    <main>
      <div
        class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
        className={styles.Banner}
      >
        <div class="col-md-5 flex justify-content-center" className={styles.textoBanner}>
          <h1 class="display-4 fw-normal 1h-1">
            Disfruta la primavera, <br />
            disfruta el camino.
          </h1>
          <p class="fs-5 fw-normal">
            Busca alquiler de autos baratos en Argentina. Con una flota diversa
            de 19.000 vehículos, Digital Booking ofrece a sus consumidores una
            atractiva y divertida selección.
          </p>
          <a class="btn btn-warning" href="#">
            Alquila tu auto
          </a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="d-flex justify-content-center">
        <section>
          <SearchBar />
          <FechaReserva />
          <div className={styles.botonNavBuscador}>
            <button class="btn-sm btn btn-outline-light me-2 w-auto ">
              Buscar
            </button>
          </div>
        </section>
      </div>
      <Categorias/>
    </main>
  );
};

export default Cuerpo;

/*BODY: BACKGROUND COLOR + 100*/
