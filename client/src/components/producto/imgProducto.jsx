import React from "react";
import styles from "./imgProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faHeart } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "./galeriaProducto/slider"

export default function ImgProducto({imagenes, toggle}) {

  const backgroundImagen = (index) => {
    return {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${imagenes[index].url})`,
  }
  };

  return (
    <>
      <section>
      
        <div className={styles.angryGrid}>
        <div className={styles.compartirLikeImgProd}>
          <div className={styles.iconoContenedor}>
            <FontAwesomeIcon icon={faShareNodes} className={styles.icon}/>
            <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
          </div>
        </div>
          <div className={styles.item0} style={backgroundImagen(0)}>
            &nbsp;
          </div>
          <div className={styles.item1} style={backgroundImagen(1)}>
            &nbsp;
          </div>
          <div className={styles.item2} style={backgroundImagen(2)}>
            &nbsp;
          </div>
          <div className={styles.item3} style={backgroundImagen(3)}>
            &nbsp;
          </div>
          <div className={styles.item4} style={backgroundImagen(0)}>
            &nbsp;
          </div>
          <div className={styles.verMas} onClick={toggle}>
            <p>Ver más</p>
          </div>
        </div>

      <div className={styles.carruselContenedor}>
        <ImageSlider slides={imagenes} toggle={toggle}/>
        </div>
    </section>
    </>
    )
  }