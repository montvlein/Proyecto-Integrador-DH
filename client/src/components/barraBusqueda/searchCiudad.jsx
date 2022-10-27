import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from ".././../styles/cuerpo.module.css";
import data from "../../data/CIUDADES.json";
import { useState } from "react";

function SearchBar() {
  const [filterData, setFilterData] = useState([]);
  const [ciudadCliqueada, setCiudadCliqueada] = useState();

  const handlerSeleccionCiudad = (event) => {
    let ciudad = event.target.textContent;
    setCiudadCliqueada(ciudad);
  };

  const handlerFilter = (event) => {
    const searchWord = event.target.value;
    if (searchWord !== "") {
      const newFilter = data.provincias.filter((value) =>
        value.iso_nombre.toLowerCase().includes(searchWord.toLowerCase())
      );
      setFilterData(newFilter);
    } else {
      setFilterData([]);
    }
  };
  return (
    <div className={styles.prueba3}>
      <div className={styles.headerSearchItem}>
  
        <input
          type="search"
          placeholder="¿A donde quieres ir?"
          className={styles.headerSearchInput}
          onChange={handlerFilter}
          value={ciudadCliqueada}
        />
      </div>

      <ul className={styles.dataResult}>
        {filterData.map((value) => (
          <div className={styles.prueba}>
            <div className={styles.prueba2}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.headerIcon}
              />
            </div>
            <li className={styles.dataItem} key={value.iso_id}>
              <p  onClick={handlerSeleccionCiudad} className={styles.ciudad}>{value.iso_nombre}</p> <span class="fw-bold">Argentina</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
