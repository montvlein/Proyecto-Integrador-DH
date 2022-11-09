import React from "react";
import style from "./politicasProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble} from "@fortawesome/free-solid-svg-icons";

export default function PoliticasProducto() {
  return (
    <section className={style.seccionPoliticasPorducto}>
      <h3 className={style.tituloPoliticasProd}>Que tenés que saber antes de alquilar tu auto</h3>
      <hr></hr>
      <div className={style.politicasProd}>
        <article className={style.contenedorRequisitos}>
          <h4>¿Qué está incluido?</h4>
          <p>Nuestras tarifas incluyen vehículos nuevos en excelentes condiciones
          equipados para la zona, silla para bebe, buster o elevador, seguro,
          entrega y recepción de los vehículos en aeropuerto, terminal, hoteles y
          conductores adicionales sin cargo.</p>
        </article>
        <article className={style.contenedorRequisitos}>
          <h4>¿Como se abona?</h4>
          <p>El Saldo por el alquiler se abona en el momento de tomar la unidad. Tarjeta de crédito o debito debera ser a nombre del conductor.</p>
        </article>
        <div className={style.contenedorRequisitos}>
          <h4>Requisitos</h4>
          <ul>
            <li>Pasaporte o Documento de Identidad</li>
            <li>
              Edad mínima de 25 años. Para conductores menores de 25 años
              condiciones aplican.
            </li>
            <li>Voucher impreso.</li>
          </ul>
        </div>
        <div className={style.contenedorRequisitos}>
          <h4>Politicas de cancelacion</h4>
          <ul>
            <li>
              Cancelación: La cancelación se podrá realizar hasta 24 horas antes
              de la hora y fecha de la reserva.
            </li>
            <li>
              Modificaciones de la Reserva: La solicitud en cambio de reservas
              se hará sujeto a disponibilidad.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
