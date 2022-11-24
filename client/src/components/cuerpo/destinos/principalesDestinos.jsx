import styles from './destinos.module.css'

export default function Destinos() {

  return (
    <section className={styles.destinoContenedor}>
      <div  className={styles.heroeContenedor}>
        <div  className={styles.tituloHeroe}>
        <h2>Principales destinos de Argentina</h2>
        </div>

        <div className={styles.contenidoPadre}> 
          <div className={styles.cardDestino1}>
          <p className={styles.atraccionesDestino}>
            Camino de los 7 lagos
          </p>
          </div>


          <div className={styles.cardDestino2}>
          <p className={styles.atraccionesDestino}>
            La Cumbrecita
          </p>
          </div>

          
          <div className={styles.cardDestino3}>
          <p className={styles.atraccionesDestino}>
            Caviahue
          </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}
