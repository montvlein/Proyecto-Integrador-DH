import React from "react";
import styles from "../calendario/calendario.module.css"
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from 'date-fns';

export default function HorarioReserva(){

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        }
      ]);


    return(
      <section className={styles.contenedorPadre}>
      <div className={styles.tituloFechaReserva}>
          <h3>Selecciona tu fecha de reserva</h3>
          <hr></hr>
      </div>
           <div className={styles.fechaContenedor}>
        <DateRange
          editableDateInputs={true}
          months={2}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          minDate={addDays(new Date(), -0)}
          ranges={state}
          direction="horizontal"
          rangeColors={["#ffc107"]}
          showMonthAndYearPickers={true}
          showDateDisplay={false}
          fixedHeight={true}
        />
       </div>
      </section>
    )
}

