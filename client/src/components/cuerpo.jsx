import styles from "../styles/cuerpo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./barraBusqueda/searchCiudad";
import FechaReserva from "./barraBusqueda/fechaReserva";

const Cuerpo = () => {


  return (
    <main>
      <div
        class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
        className={styles.Banner}
      >
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal 1h-1">
            Disfruta la primavera, disfruta el camino.
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
        <section className={styles.headerSearch}>

          <SearchBar />
          <FechaReserva />

          <div className={styles.headerSearchItem}>
            <FontAwesomeIcon icon={faClock} className={styles.headerIcon} />
            <span className="headerSearchText">Hora de retiro</span>
          </div>

          <div className={styles.headerSearchItem}>
            <FontAwesomeIcon icon={faClock} className={styles.headerIcon} />
            <span className="headerSearchText">Hora de devolucion</span>
          </div>

          <div className={styles.headerSearchItem}>
            <button class="btn btn-outline-light me-2">Buscar</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cuerpo;

/*BODY: BACKGROUND COLOR + 100*/
