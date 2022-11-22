import React from "react";
import styles from "../detalleReserva/detalleReserva.module.css";
import stylesArticlulo from "../../producto/producto";
import { useState, useEffect } from "react";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import ImgProducto from "../../producto/imgProducto";
import { fromUnixTime } from "date-fns";

export default function DetalleReserva({ producto }) {
  const backgroundImagen = (producto) => {
    return {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${producto.url[0]})`,
    };
  };

  return (
    <section className={styles.sectionDetalle}>
      <div className={styles.detalleReserva}>

        <div className={styles.contenedorImagen}>
        <h3 className={styles.tituloReserva}>Detalle de reserva</h3>
          <img src={producto.imagenes[0].url} className={styles.imagenCard} />
        </div>

        <div className={styles.contenedorDetalles}>
        <div className={styles.contenedorTituloEstrellas}>
          <p className={styles.detalleCategoria}>
            {producto.categoria.toUpperCase()}
          </p>
          <h5 className={styles.detalleNombre}>{producto.nombre}</h5>
          <div className={styles.calificacionEstrellas}>
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
          </div>
        </div>

        <div className={styles.detalleUbicacion}>
          <div className={styles.iconoGlobo}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.iconoUbi} />
          </div>
          <p className={styles.ubicacionReserva}>
            {producto.ciudad.nombre}, {producto.ciudad.provincia},{" "}
            {producto.ciudad.pais}
          </p>
        </div>

        <div className={styles.horariosReserva}>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.reservaCheckIn}>
            <label for="start">Check in</label>
            <input
              className={styles.inputIn}
              disabled
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.reservaCheckOut}>
            <label for="start">Check out</label>
            <input
              className={styles.inputOut}
              disabled
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
          <hr className={styles.lineaCheck}></hr>
          <div className={styles.botonReservaContainer}>
            <button className={styles.botonReserva}>Confirmar Reserva</button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
