import styles from "./bloqueReserva.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState, useContext } from "react";
import { DateRange, DefinedRange } from "react-date-range";
import { Link, useNavigate } from "react-router-dom";
import { addDays } from "date-fns";
import estilo from "./boton.module.css"
import Contexto from "../../../contexto/AppContext"

function BloqueReserva({producto}) {
  const [fechasConReserva, setState] = useState([]);
  const {estaLaSesionIniciada, setSinUsuarioParaReserva} = useContext(Contexto);
  const months = window.matchMedia("(max-width: 760px)").matches ? 1 : 2;
  const redirigir = useNavigate();

  producto?.fechasConReserva && producto?.fechasConReserva.map(fecha => {
    fechasConReserva.push(new Date(fecha.split("-")))
  })

 function validacionInicioSesion() {
      if(estaLaSesionIniciada()) {
        redirigir(`/producto/${producto.id}/reserva`)
      }

      else {
        setSinUsuarioParaReserva(true) 
        redirigir("/iniciarSesion")
      }
 }

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
            disabledDates={fechasConReserva}
          />
        </div>


        <div className={styles.contenedorBoton}>
          <h5>¡Inicia tu reserva ahora!</h5>
          <button className={estilo.botonNuevo} onClick={validacionInicioSesion}><span>Iniciar Reserva</span></button>   
            
    
        </div>

      </div>
    </section>
  );
}

export default BloqueReserva;
