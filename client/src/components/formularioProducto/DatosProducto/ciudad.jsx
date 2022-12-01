import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./ciudad.module.css";
import { useState, useEffect, useContext } from "react";
import { DigitalBookingApi } from "../../../data/conexionAPI";

function BuscadorCiudad() {
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

  return (
    <div className={styles.prueba3}>
      <div className={styles.headerSearchItem}>
        <input
          type="search"
          placeholder="Elije tu ciudad"
          className={styles.headerSearchInput}
          onChange={handlerFilter}
          id="buscadorInput"
          name="buscadorCiudad"
          autoComplete="off"
        />
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
            <div className={styles.iconoLocalizacion}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.headerIcon}
              />
            </div>
            <li className={styles.dataItem} key={value.nombre}>
              <p className={styles.ciudad}>{value.nombre}, <span class="fw-bold">Argentina</span></p>
              
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BuscadorCiudad;
