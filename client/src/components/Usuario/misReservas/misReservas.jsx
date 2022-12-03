import styles from "./misreservas.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

export default function MisReservas () {
    return(
        <section>
        <h3>Mis Reservas</h3>
            <section>
                <h4>Reservas activas</h4>
                <article className={styles.contenedor}>
                <div className={styles.contenedorImagen}>
                <img src={"https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-03.jpg"} className={styles.imagenCard} />
                </div>
                <div className={styles.info}>
                <p className={styles.tituloAuto}>Chevrolet Onix</p>
                <p className={styles.subtituloAuto}>Compacto</p>
                <p>Lo recoges en:</p>
                <p>Lo dejas en:</p>
                </div>
                <div className={styles.botones}>
                    <button>Imprimir</button> 
                    <button>Agregar a Google Calendar</button>
                </div>
                </article>

            </section>
        </section>
    )
}