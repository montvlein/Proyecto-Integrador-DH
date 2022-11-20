import React from 'react'
import styles from './exito.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

export default function Exito() {
    return (
        <section>

            <div className={styles.divPadre}>

                <div className={styles.divMadre}>


                <div className={styles.divContenedorHijo}>
                <div className={styles.divIconoCheck}>  <FontAwesomeIcon icon={faCircleCheck} /> </div>
                <h4 > ¡Muchas Gracias! </h4>
                <p>Tu reserva ha sido exitosa</p>
                <button className={styles.divBotonOk}>Ok</button>
                </div>

               
                </div>
            </div>



        </section>
    )
}