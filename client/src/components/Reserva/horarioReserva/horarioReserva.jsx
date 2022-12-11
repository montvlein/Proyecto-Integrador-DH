import styles from "../horarioReserva/horarioReserva.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function HorarioReserva({hora, setHoraInicial}){

    return(
        <section className={styles.contenedorPadre}>

                <div className={styles.tituloHorario}>
                    <h3>Tu horario de llegada</h3>
                    <hr></hr>
                </div>
                <div className={styles.contenedorHijo}>
                <div className={styles.fraseHorario}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.icons} />
                <h4>Tu auto estara listo para que sea recogido a las <span>{hora}</span></h4>
                </div>

                <div className={styles.contenedorDesplegable}>
                    <p>Indica tu horario de retiro:</p>
                    <select defaultValue="Selecciona tu horario" className={styles.estiloSelect}
                    onChange={(event) => setHoraInicial(event.target.value)} id="select" required="true">
                        <option disabled hidden>Selecciona tu horario</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                    </select>
                </div>
                </div>
        </section>
    )
}