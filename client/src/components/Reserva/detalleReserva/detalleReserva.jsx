import React from "react";
import styles from "../detalleReserva/detalleReserva.module.css"
import producto from "../../producto/cabeceraProducto"


export default function DetalleReserva(){
    return(
        <section className={styles.detalleReserva}>
        <h3>
            Detalle de reserva
        </h3>
        <img clasName={styles.imagenReserva} src= "https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-01.jpg"/>
        <p>Nombre producto</p>
        <div>Ubicacion producto</div>
        <div>Check in</div>
        <div>Check out</div>
        <button>Confirmar Reserva</button>


    
    </section>
    )
}


