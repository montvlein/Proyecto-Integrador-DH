import styles from "./misreservas.module.css";
import { useEffect, useState } from "react";
import { DigitalBookingApi } from "../../../data/conexionAPI";

export default function MisReservas({ idUsuario }) {
  const [misReservas, setMisReservas] = useState([]);

  useEffect(() => {
    DigitalBookingApi.reserva.buscarPorIdUsuario(idUsuario).then((reserva) => {
      setMisReservas(reserva);
    });
  }, []);

  return (
    <section>
      <h3>Mis Reservas</h3>
      <section>
        <h4>Reservas activas</h4>
        {misReservas.map((reserva) => {
            <pre>{reserva}</pre>
        })}
      </section>
    </section>
  );
}

{/* <article className={styles.contenedor}>
<div className={styles.contenedorImagen}>
  <img
    src={
      "https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-03.jpg"
    }
    className={styles.imagenCard}
  />
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
</article>; */}