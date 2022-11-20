
import React from "react";
import styles from "../horarioReserva/horarioReserva.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function HorarioReserva(){   
    const [hora, setHora] = useState("12:00:00");
   

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
                    onChange={(event) => setHora(event.target.value)} id="select">
                        <option disabled hidden>Selecciona tu horario</option>
                        <option>09:00:00</option>
                        <option>10:00:00</option>
                        <option>11:00:00</option>
                        <option>12:00:00</option>
                        <option>13:00:00</option>
                        <option>15:00:00</option>
                        <option>16:00:00</option>
                        <option>17:00:00</option>
                        <option>18:00:00</option>
                        <option>19:00:00</option>
                        <option>20:00:00</option>
                        <option>21:00:00</option>
                        <option>22:00:00</option>
                    </select>
                </div>
                </div>
        </section>
    )
}