import React from "react";
import styles from "./imgProducto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ImgProducto({toggle}) {
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

  const backgroundImagen = (index) => {
    return {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${images[index].url})`,
  }
  };

  return (
    <>
      <section>
        <div className={styles.compartirLikeImgProd}>
          <div className={styles.iconoContenedor}>
            <FontAwesomeIcon icon={faShareNodes} className={styles.iconoshare}/>
            <FontAwesomeIcon icon={faHeart} className={styles.iconolike}/>
          </div>
        </div>

        <div className={styles.angryGrid}>
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
          <div className={styles.item4} style={backgroundImagen(4)}>
            &nbsp;
          </div>
          <div className={styles.verMas} onClick={toggle}>
            <p>Ver más</p>
          </div>
        </div>

    </section>
    </>
    )
  }