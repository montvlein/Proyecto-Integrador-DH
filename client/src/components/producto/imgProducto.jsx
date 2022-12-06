import React from "react";
import styles from "./imgProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faHeart } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "./galeriaProducto/slider";

export default function ImgProducto({ imagenes, toggle }) {
  const backgroundImagen = (index) => {
    return {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${imagenes[index].url})`,
    };
  };

  return (
    <>
      <section className={styles.contenedorPadre}>
        <div className={styles.angryGrid}>

          <div className={styles.compartirLikeImgProd}>
            <div className={styles.iconoContenedor}>
              <FontAwesomeIcon icon={faShareNodes} className={styles.icon} />
              <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            </div>
          </div>

          {imagenes.map((img, index) => (
            <div
              className={`${index === 0 ? styles.item0 : ""} ${
                styles.itemGrid
              }`}
              style={backgroundImagen(index)}
              key={img.id}
            >
              &nbsp;
            </div>
          ))}

          <div className={styles.verMas} onClick={toggle}>
            <p>Ver más</p>
          </div>

        </div>

        <div className={styles.carruselContenedor}>
          <ImageSlider slides={imagenes} toggle={toggle} />
        </div>
      </section>
    </>
  );
}
