import React from "react";
import style from "./politicasProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble} from "@fortawesome/free-solid-svg-icons";

export default function PoliticasPorducto() {
  return (
    <section className={style.seccionPoliticasPorducto}>
      <h3 className={style.tituloPoliticasProd}>Qué tenés que saber</h3>
      <hr></hr>
      <div className={style.politicasProd}>
        <div className={style.contenedorRequisitos}>
          <h4>Requisitos</h4>
          <ul>
            <li>Pasaporte o Documento de Identidad</li>
            <li>
              Edad mínima de 25 años. Para conductores menores de 25 años
              condiciones aplican.
              <span>Leer más</span>
            </li>
            <li>
              Tarjeta de crédito o debito debera ser a nombre del conductor
            </li>
            <li>Voucher impreso.</li>
          </ul>
        </div>
        <div className={style.contenedorCancelacion}>
          <h4>Politicas de cancelacion</h4>
          <ul>
            <li>
              Cancelación: La cancelación se podrá realizar hasta 24 horas antes
              de la hora y fecha de la reserva. <span>Leer más</span>
            </li>
            <li>
              Modificaciones de la Reserva: La solicitud en cambio de reservas
              se hará sujeto a disponibilidad <span>Leer más</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
