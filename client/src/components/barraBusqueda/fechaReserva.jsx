import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from ".././../styles/cuerpo.module.css";
import {
  faCalendarDays,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css fil
import { format } from "date-fns";
import { useState } from "react";

function FechaReserva() {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
    
      const [openDate, setOpenDate] = useState(false);

  return (
    <div className={styles.headerSearchItem}>
      <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
        <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon} />{" "}
        {`Desde ${format(date[0].startDate, "MM/dd/yyyy")}`}{" "}
        <FontAwesomeIcon icon={faArrowRight} />{" "}
        {`Hasta ${format(date[0].endDate, "MM/dd/yyyy")}`}
      </span>
      {openDate && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className={styles.date}
        />
      )}
    </div>
  );
}

export default FechaReserva;
