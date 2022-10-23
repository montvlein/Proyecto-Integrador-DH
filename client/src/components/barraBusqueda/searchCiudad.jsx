import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from ".././../styles/cuerpo.module.css";
import data from "../../CIUDADES.json";
import { useState } from "react";

function SearchBar() {
  const [filterData, setFilterData] = useState([]);

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
        <FontAwesomeIcon icon={faLocationDot} className={styles.headerIcon} />
        <input
          type="search"
          placeholder="¿A donde quieres ir?"
          className={styles.headerSearchInput}
          onChange={handlerFilter}
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
              {value.iso_nombre}<span class="fw-bold">Argentina</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
