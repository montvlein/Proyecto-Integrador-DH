import styles from "./politicasProducto.module.css"

export default function CrearPoliticasProducto() {
  
  
    return (
    <section>
    <h3 className={styles.titulo}>Políticas de producto</h3>
      <div className={styles.contenedorPadre}>
        <div className={styles.divPoliticas}>
            <h5>Normas</h5>
          <label className={styles.label}>Descripción</label>
          <textarea name="descripcion" placeholder="Escribir aquí" className={styles.input}/>
        </div>
        <div className={styles.divPoliticas}>
        <h5>Seguridad</h5>
          <label className={styles.label}>Descripción</label>
          <textarea name="descripcion" placeholder="Escribir aquí" className={styles.input}/>
        </div>
        <div className={styles.divPoliticas}>
        <h5>Políticas de cancelación</h5>
          <label className={styles.label}>Descripción</label>
          <textarea name="descripcion" placeholder="Escribir aquí" className={styles.input}/>
        </div>
      </div>
    </section>
  );
}
