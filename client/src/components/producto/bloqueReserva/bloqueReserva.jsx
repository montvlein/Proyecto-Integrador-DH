import styles from "./bloqueReserva.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";

function BloqueReserva() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <section className={styles.contenedor}>
      <h3 className={styles.titulo}>Elegi la fecha de tu viaje</h3>
      <hr />
      <div className={styles.contenedorPadre}>
        <div className={styles.fechaContenedor}>
          <DateRange
            editableDateInputs={true}
            months={2}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            direction="horizontal"
            className={styles.calendario}
          />
        <button className={styles.botonReserva}>Iniciar Reserva</button>
        </div>
      </div>
    </section>
  );
}

export default BloqueReserva;
