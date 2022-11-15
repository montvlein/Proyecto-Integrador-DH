import styles from "./galeriaProducto.module.css";
import ImageSlider from "./slider";

function GaleriaProducto({isOpen, toggle, imagenes}) {

  return (
    <section className={isOpen ? styles.galeriaPadreMostrar : styles.galeriaPadre }>
      <div className={styles.contenedorPadre}>
        <div className={styles.contenedorSlider}>
          <ImageSlider slides={imagenes} toggle={toggle}></ImageSlider>
        </div>
      </div>
    </section>
  );
}

export default GaleriaProducto;
