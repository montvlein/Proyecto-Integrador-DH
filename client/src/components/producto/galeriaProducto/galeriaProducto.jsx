import styles from "./galeriaProducto.module.css";
import ImageSlider from "./slider";

function GaleriaProducto({isOpen, toggle}) {
  const images = [
    {
      url: "https://www.megautos.com/wp-content/uploads/2019/09/chevrolet-onix-plus-premier-2020-delantera.jpg",
      title: "auto",
    },
    {
      url: "https://www.autoweb.com.ar/wp-content/uploads/2020/09/Onix-RS-17.jpg",
      title: "auto1",
    },
    {
      url: "https://www.autoweb.com.ar/wp-content/uploads/2021/12/chevrolet-joy-1024x682.jpeg",
      title: "auto2",
    },
    {
      url: "https://cdn.motor1.com/images/mgl/02LE2/s3/critica-chevrolet-onix-1-0-turbo-ltz-automatico.jpg",
      title: "auto3",
    },
    {
      url: "https://autotest.com.ar/wp-content/uploads/2021/03/CHEVROLET-ONIX-RS-1.jpg",
      title: "auto4",
    },
  ];



  return (
    <section className={isOpen ? styles.galeriaPadreMostrar : styles.galeriaPadre } isOpen={isOpen}>
      <div className={styles.contenedorPadre}>
        <div className={styles.contenedorSlider}>
          <ImageSlider slides={images} toggle={toggle}></ImageSlider>
        </div>
      </div>
    </section>
  );
}

export default GaleriaProducto;
