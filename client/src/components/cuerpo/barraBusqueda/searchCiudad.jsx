import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "../cuerpo.module.css";
import { useState, useEffect, useContext } from "react";
import { DigitalBookingApi } from "../../../data/conexionAPI";

function SearchBar() {
  const [cargando, setEstaCargando] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    DigitalBookingApi.ciudad.listar().then((ciudades) => {
      setCiudades(ciudades);
    });
  }, []);

  const handlerFilter = (event) => {
    const searchWord = event.target.value;
    if (searchWord !== "") {
      const newFilter = ciudades.filter((value) =>
        value.nombre.toLowerCase().includes(searchWord.toLowerCase())
      );
      setFilterData(newFilter);
    } else {
      setFilterData([]);
    }
  };

  if (cargando) {
    <div class="spinner-border text-warning" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>;
  }

  const icono = "A donde quieres ir"
  const icono2 = "&#xf3c5;"

  return (
    <div className={styles.prueba3}>
      <div className={styles.headerSearchItem}>
      <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.formIcon}
              />
        <input
          type="search"
          placeholder="     ¿A donde quieres ir?"
          className={styles.headerSearchInput}
          onChange={handlerFilter}
          id="buscadorInput"
          name="buscadorCiudad"
          autoComplete="off"
        >
        </input>
      </div>

      <ul className={styles.dataResult} id="listaCiudades">
        {filterData.map((value) => (
          <div
            className={styles.prueba}
            key={value.id}
            onClick={(e) => {
              let input = document.querySelector("#buscadorInput");
              input.value = value.nombre + ", Argentina";
              setFilterData([]);
            }}
          >
            <div className={styles.prueba2}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.headerIcon}
              />
            </div>
            <li className={styles.dataItem} key={value.nombre}>
              <p className={styles.ciudad}>{value.nombre}</p>{" "}
              <span class="fw-bold">Argentina</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
