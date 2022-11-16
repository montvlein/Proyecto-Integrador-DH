import React from "react";
import CabeceraProducto from "../../producto/cabeceraProducto";
import ImgProducto from "../../producto/imgProducto";
export default function DetalleReserva(){
    return(
        <section>
        <CabeceraProducto/>
       
        <div>
        <h3>
            Detalle de reserva
        </h3>
        <ImgProducto/>
        <Categoria/>
        
        </div>
            
        </section>
    )
}