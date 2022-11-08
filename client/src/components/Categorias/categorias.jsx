import { useEffect, useState, useContext } from "react";
import styles from "./categorias.module.css";
import Contexto from "../../contexto/AppContext";
import { DigitalBookingApi } from "../../data/conexionAPI";

export default function Categorias() {
  const [cargando, setEstaCargando] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const { filtarAutos } = useContext(Contexto);

  useEffect(() => {
    DigitalBookingApi.categoria.listar().then((categorias) => {
      setCategorias(categorias);
      setEstaCargando(false);
    });
  }, []);

  if (cargando) {
    return (
      <section className={styles.contenedorPadre}>
        <div className={styles.tituloCategorias}>
          <div>
            <h3>Elige tu categoria</h3>
          </div>
        </div>

        <div className={styles.categoria_section}>
          <article className={`loading_background ${styles.categoria_loading_height}`}>
            <div className={`loading_animation`}></div>
          </article>
          <article
            className={`loading_background ${styles.categoria_loading_height}`}
          >
            <div className={`loading_animation`}></div>
          </article>
          <article
            className={`loading_background ${styles.categoria_loading_height}`}
          >
            <div className={`loading_animation`}></div>
          </article>
          <article
            className={`loading_background ${styles.categoria_loading_height}`}
          >
            <div className={`loading_animation`}></div>
          </article>
          <article
            className={`loading_background ${styles.categoria_loading_height}`}
          >
            <div className={`loading_animation`}></div>
          </article>
          <article
            className={`loading_background ${styles.categoria_loading_height}`}
          >
            <div className={`loading_animation`}></div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contenedorPadre}>
      <div className={styles.tituloCategorias}>
        <div>
          <h3>Elige tu categoria</h3>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>

      <div className={styles.categoria_section}>
        {categorias.map((cat) => {
          return (
            <article
              className={styles.categoria_article}
              key={cat.id}
              onClick={(e) => {
                filtarAutos(cat.titulo);
              }}
            >
              <figure className={styles.categoria_figure}>
                <img
                  src={cat.urlImagen}
                  alt={cat.titulo}
                  className={styles.categoria_img}
                />
                <figcaption className={styles.categoria_figcaption}>
                  {" "}
                  {cat.titulo}{" "}
                </figcaption>
              </figure>
            </article>
          );
        })}
      </div>
    </section>
  );
}
