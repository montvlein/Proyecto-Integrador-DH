import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../cuerpo.module.css";
import {
  faCalendarDays,
  faArrowRight,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css fil
import { format, startOfWeekYear } from "date-fns";
import { useContext, useState } from "react";
import Contexto from "../../../contexto/AppContext";
import { addDays } from "date-fns";

function FechaReserva() {
  const { setFechaInicioBusqueda, setFechaFinalBusqueda } =
    useContext(Contexto);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [estaSeleccionado, setEstaSeleccionado] = useState(false)
  const [openDate, setOpenDate] = useState(false);
  const [CheckIn, setCheckIn] = useState("Check in");
  const [CheckOut, setCheckOut] = useState("Check out");

  return (
    <div className={styles.rangoFecha}>
      <div className={styles.headerSearchText}>
            <span onClick={() => setOpenDate(!openDate)}>
        <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon} />{" "}
        {` ${estaSeleccionado?format(date[0].startDate, "dd/MM/yyyy"):CheckIn}`}{" "} - {" "}
        {` ${estaSeleccionado?format(date[0].endDate, "dd/MM/yyyy"):CheckOut}`}
       </span>
       {estaSeleccionado?<FontAwesomeIcon icon={faXmark} className={styles.cierreIcon}
        onClick={() => {
          setOpenDate(false)
          setEstaSeleccionado(false)
          }
        }
       />:null}
      </div>

      {openDate && (
        <DateRange
          editableDateInputs={true}
          minDate={addDays(new Date(), -0)}
          onChange={(item) => {
            setDate([item.selection]);
            setFechaInicioBusqueda(format(date[0].startDate, "yyyy-MM-dd"));
            setFechaFinalBusqueda(format(date[0].endDate, "yyyy-MM-dd"));
            setEstaSeleccionado(true)
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
