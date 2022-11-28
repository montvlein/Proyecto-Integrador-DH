import styles from "./destinos.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Destinos() {
  const destinos = [
    {
      url: "https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/assets/cardBariloche.jpg",
      nombreDestino: "Bariloche",
    },
    {
      url: "https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/assets/cardCordoba.jpg",
      nombreDestino: "Cordoba",
    },
    {
      url: "https://0521ptc3n1db-g2-cliente.s3.us-east-2.amazonaws.com/imagenes/assets/cardMendoza.jpg",
      nombreDestino: "Mendoza",
    },
  ];

  const [indexActual, setIndexActual] = useState(0);

  const carruselScrollInfinito = () => {
    if (indexActual === destinos.length - 1) {
      return setIndexActual(0);
    }
    return setIndexActual(indexActual + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carruselScrollInfinito();
    }, 3000);
    return () => clearInterval(interval);
  });

  const irAdestino = (index) => {
    setIndexActual(index);
  };

  return (
    <>
      <section className={styles.destinoContenedor}>
        <div className={styles.heroeContenedor}>
          <div className={styles.tituloHeroe}>
            <h2>Descubre Argentina</h2>
            <p>Estos destinos populares tienen mucho que ofrecer</p>
          </div>

          <div className={styles.contenidoPadre}>
            <div className={styles.cardDestino1}>
              <p className={styles.atraccionesDestino}>Camino de los 7 lagos</p>
            </div>

            <div className={styles.cardDestino2}>
              <p className={styles.atraccionesDestino}>La Cumbrecita</p>
            </div>

            <div className={styles.cardDestino3}>
              <p className={styles.atraccionesDestino}>Caviahue</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.destinoContenedor2}>
      <div className={styles.contenedorFlex}>
      <div className={styles.tituloHeroe}>
            <h2>Descubre Argentina</h2>
            <p>Estos destinos populares tienen mucho que ofrecer</p>
          </div>
        <div className={styles.contenedorImagen}>
          {destinos.map((item, index) => {
            return (
              <><p className={styles.atraccionesDestino2}>{destinos[indexActual].nombreDestino}</p>
                <img
                  src={destinos[indexActual].url}
                  className={styles.imagen}
                  key={index}
                ></img>
              </>
            );
          })}
        </div>

        <div className={styles.contenedorIconos}>
          <div>
            {destinos.map((item, indexDestino) => (
              <FontAwesomeIcon
                icon={faCircle}
                className={styles.iconos}
                onClick={() => irAdestino(indexDestino)}
                key={indexDestino}
              ></FontAwesomeIcon>
            ))}
          </div>
        </div>

      </div>
      </section>
    </>
  );
}
