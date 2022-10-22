import provincias from "../CIUDADES.json";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";

    function SearchBar({placeholder, data})  {

        const [filterData, setFilterData] = useState([]);

        const handlerFilter = (event) => {
            const searchWord = event.target.value;
            const newFilter = data.filter((value) => {
                return value.iso_nombre.includes(searchWord);
            });
            setFilterData(newFilter);
        }; 
        return(
            <div>
                <div className={styles.headerSearchItem}>
                <FontAwesomeIcon icon={faLocationDot} />
                    <input type="text" placeholder={placeholder} className={styles.headerSearchInput} data={provincias}
                        onChange={handlerFilter}
                    />
                </div>
            {filterData.length != 0 && (
                <div className={styles.dataResult}>
                    {filterData.map((value, key) => {
                            return <p className="dataItem">{value.iso_nombre}</p>
                    })}
    
                </div>
            )
            }

            </div>
        )    
    
    }


export default SearchBar;