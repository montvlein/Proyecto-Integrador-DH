import { useEffect, useState, useContext } from "react";
import styles from "./categoriasNuevas.module.css";
import Contexto from "../../contexto/AppContext";
import { DigitalBookingApi } from "../../data/conexionAPI";
import { Link } from "react-router-dom";

export default function CategoriasNuevas() {
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
          <p>Selecciona entre las opciones de nuestra increíble flota</p>
        </div>
      </div>

      <div className={styles.categoriaContenedor}>
        {categorias.map((cat) => {
          return (
            <Link to={`buscar?categoria=${cat.titulo}`}
              className={styles.card}
              key={cat.id}
              onClick={(e) => {
                filtarAutos(cat.titulo);
              }}
              >
              <div className={styles.card}>
                <img src={cat.urlImagen} alt={cat.titulo}/>
                <p className={styles.cardTitulo}>{cat.titulo}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
