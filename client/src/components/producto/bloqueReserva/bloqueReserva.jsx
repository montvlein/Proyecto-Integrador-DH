import styles from "./bloqueReserva.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange, DefinedRange } from "react-date-range";
import { Link } from "react-router-dom";
import { addDays } from "date-fns";
import estilo from "./boton.module.css"

function BloqueReserva() {
  const [state, setState] = useState([]);
  const months = window.matchMedia("(max-width: 760px)").matches ? 1 : 2;

  return (
    <section className={styles.contenedor}>
      <h3 className={styles.titulo}>Elegi la fecha de tu viaje</h3>
      <hr />
      <div className={styles.contenedorPadre}>
        
        <div className={styles.fechaContenedor}>
          <DateRange
            editableDateInputs={false}
            months={months}
            rangeColors={["#ffc107"]}
            minDate={addDays(new Date(), -0)}
            direction="horizontal"
            showSelectionPreview={true}
            showPreview={false}
            fixedHeight={true}
          />
        </div>


        <div className={styles.contenedorBoton}>
          <h5>¡Inicia tu reserva ahora!</h5>
          <Link to="reserva"><button className={estilo.botonNuevo}><span>Iniciar Reserva</span></button></Link>     
            
    
        </div>

      </div>
    </section>
  );
}

export default BloqueReserva;
