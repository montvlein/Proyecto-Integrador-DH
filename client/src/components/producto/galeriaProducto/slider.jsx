import { useEffect, useState } from "react";
import styles from "./galeriaProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import Destinos from "../../cuerpo/destinos/principalesDestinos";

function ImageSlider({ slides, toggle }) {
  const [indexActual, setIndexActual] = useState(0);
  
  const carruselScrollInfinito = () => {
    if (indexActual === slides.length-1) {
      return setIndexActual(0)
    }
    return setIndexActual(indexActual+1)
  }

  useEffect(() => {
    const interval = setInterval(() => {carruselScrollInfinito()}, 3000)
    return () => clearInterval(interval)
  })



  const estiloImagen = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[indexActual].url})`,
    transition: "1s cubic-bezier(0.39, 0.575, 0.565, 1)",
  };



  const imagenPequenia = (index) => {
    return {
    width: "120px",
    height: "70px",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[index].url})`,
    transition: "1s cubic-bezier(0.39, 0.575, 0.565, 1)",
    }

  };

  const anterior = () => {
    const ultimaSlide = indexActual === slides.length - 1;
    const nuevoIndex = ultimaSlide ? 0 : indexActual + 1;
    setIndexActual(nuevoIndex);
  };

  const siguiente = () => {
    const primeraSlide = indexActual === 0;
    const nuevoIndex = primeraSlide ? slides.length - 1 : indexActual - 1;
    setIndexActual(nuevoIndex);
  };

  const irASlide = (slidesIndex) => {
    setIndexActual(slidesIndex);
  };



  return (
    <div className={styles.imagenContenedor}>
         <div className={styles.iconoCerrar}>
        <FontAwesomeIcon icon={faXmark} onClick={toggle}></FontAwesomeIcon>
      </div>
      <div className={styles.controles}>
        <button className={styles.botonIzquierdo} onClick={anterior}>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </button>
        <button className={styles.botonDerecho} onClick={siguiente}>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
      <div style={estiloImagen}></div>

      <div className={styles.contenedorImgPequenias}>
        {slides.map((slides, slidesIndex) => (
          <div key={slidesIndex} style={imagenPequenia(slidesIndex)} onClick={() => irASlide(slidesIndex)} className={styles.divImagenPequeña}>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
