import styles from "./politicasProducto.module.css"

export default function CrearPoliticasProducto() {
  
  
    return (
    <section>
    <h3 className={styles.titulo}>Políticas de producto</h3>
      <div className={styles.contenedorPadre}>
        <div className={styles.divPoliticas}>
          <label className={styles.label}>Normas</label>
          <textarea name="normas" placeholder="Escribir aquí" className={styles.input}/>
        </div>
        <div className={styles.divPoliticas}>
          <label className={styles.label}>Seguridad</label>
          <textarea name="seguridad" placeholder="Escribir aquí" className={styles.input}/>
        </div>
        <div className={styles.divPoliticas}>
          <label className={styles.label}>Políticas de cancelación</label>
          <textarea name="politicas" placeholder="Escribir aquí" className={styles.input}/>
        </div>
      </div>
    </section>
  );
}
