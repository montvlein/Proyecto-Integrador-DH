import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../cuerpo.module.css";
import {
  faCalendarDays,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css fil
import { format, startOfWeekYear } from "date-fns";
import { useContext, useState } from "react";
import Contexto from "../../../contexto/AppContext";
import { addDays } from "date-fns";

function FechaReserva() {
  const { setFechaInicioBusqueda, setFechaFinalBusqueda } = useContext(Contexto)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);

      const [openDate, setOpenDate] = useState(false);


  return (
    <div className={styles.rangoFecha}>
      <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
        <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon} />{" "}
        {`Desde ${format(date[0].startDate, "dd/MM/yyyy")}`}{" "}
        <FontAwesomeIcon icon={faArrowRight} />{" "}
        {`Hasta ${format(date[0].endDate, "dd/MM/yyyy")}`}
      </span>
      {openDate && (
        <DateRange
          editableDateInputs={true}
          minDate={addDays(new Date(), -0)}
          onChange={(item) => {
            setDate([item.selection])
            setFechaInicioBusqueda(format(date[0].startDate, "yyyy-MM-dd"))
            setFechaFinalBusqueda(format(date[0].endDate, "yyyy-MM-dd"))

          }}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className={styles.date}
        />
      )}
    </div>
  );
}

export default FechaReserva;
