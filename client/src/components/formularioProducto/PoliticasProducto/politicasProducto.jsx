import styles from "./politicasProducto.module.css";

export default function CrearPoliticasProducto() {
  return (
    <section>
      <h3 className={styles.titulo}>Políticas de producto</h3>
      <div className={styles.contenedorPadre}>
        <div className={styles.divPoliticas}>
          <label className={styles.label}>Normas</label>
          <textarea
            name="normas"
            disabled
            value="El Saldo por el alquiler se abona en el momento de tomar la unidad. Tarjeta de crédito o debito debera ser a nombre del conductor."
            className={styles.input}
          />
        </div>
        <div className={styles.divPoliticas}>
          <label className={styles.label}>Seguridad</label>
          <textarea
            name="seguridad"
            disabled
            value="Pasaporte o Documento de Identidad.
            Edad mínima de 25 años. Para conductores menores de 25 años condiciones aplican.
            Voucher impreso."
            className={styles.input}
          />
        </div>
        <div className={styles.divPoliticas}>
          <label className={styles.label}>Políticas de cancelación</label>
          <textarea
            name="politicas"
            disabled
            value="Cancelación: La cancelación se podrá realizar hasta 24 horas antes de la hora y fecha de la reserva.
            Modificaciones de la Reserva: La solicitud en cambio de reservas se hará sujeto a disponibilidad."
            className={styles.input}
          />
        </div>
      </div>
    </section>
  );
}
