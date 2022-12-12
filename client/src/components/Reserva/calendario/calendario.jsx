import React from "react";
import styles from "../calendario/calendario.module.css"
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from 'date-fns';
import { format } from "date-fns";

export default function HorarioReserva({fechaFinal, fechaInicial, producto}){
    const [fechasConReserva, setfechasConReserva] = useState([]);
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        }
      ]);
    const months = window.matchMedia("(max-width: 760px)").matches ? 1 : 2;


      producto?.fechasConReserva && producto?.fechasConReserva.map(fecha => {
        fechasConReserva.push(new Date(fecha.split("-")))
      })

    return(
      <section className={styles.contenedorPadre}>
      <div className={styles.tituloFechaReserva}>
          <h3>Selecciona tu fecha de reserva</h3>
          <hr></hr>
      </div>
           <div className={styles.fechaContenedor}>
        <DateRange
          editableDateInputs={true}
          months={months}
          onChange={(item) => {
            setState([item.selection])
          }}
          moveRangeOnFirstSelection={false}
          minDate={addDays(new Date(), -0)}
          ranges={state}
          direction="horizontal"
          rangeColors={["#ffc107"]}
          selectRange={true}
          showMonthAndYearPickers={true}
          showDateDisplay={false}
          fixedHeight={true}
          disabledDates={fechasConReserva}
          />
            {fechaInicial(format(state[0].startDate, "yyyy-MM-dd"))}
            {fechaFinal(format(state[0].endDate, "yyyy-MM-dd"))}
       </div>
      </section>
    )
}

