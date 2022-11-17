import React from "react";
import styles from "../detalleReserva/detalleReserva.module.css"
import stylesArticlulo from '../../producto/producto'
import { useState, useEffect } from 'react';
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { useParams } from 'react-router-dom';



export default function DetalleReserva(){
  const { idProducto } = useParams()
  const [cargando, setEstaCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
setOpen(!isOpen);}
const backgroundImagen = (index) => {
    return {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${imagenes[index].url})`,
  }
  };
useEffect(() => {
    DigitalBookingApi.auto.buscarPorID(idProducto).then((auto) => {
      setProducto(auto);
      setEstaCargando(false);
    });
  }, []);

  if (cargando) {
    return(
      <article className={`${stylesArticlulo.productoArticulo} d-flex justify-content-center`}>
        <div className="spinner-border m-5" roler="status"></div>
      </article>
    )
  }
    return(
        <section className={styles.detalleReserva}>
        <h3>
            Detalle de reserva
        </h3>
        <img clasName={styles.imagenReserva} src= "https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/Compacto_Onix/Compacto_Onix-01.jpg"/> 
        {/* <img>{producto.imagenes}</img> */}
        <p>{producto.nombre}</p>
        <p>{producto.descripcion}</p>
        <p>{producto.categoria}</p>
        <div>Check in</div>
        <div>Check out</div>
        <button>Confirmar Reserva</button>


    
    </section>
    )
}


