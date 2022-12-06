import { useEffect, useState } from "react";
import styles from "./categoriasNuevas.module.css";
import { DigitalBookingApi } from "../../data/conexionAPI";
import { useNavigate } from "react-router-dom";

export default function Categorias() {
  const redirigir = useNavigate()
  const [cargando, setEstaCargando] = useState(true);
  const [categorias, setCategorias] = useState([]);

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
          <div>
            <p>Selecciona entre las opciones de nuestra increíble flota</p>
          </div>
        </div>

        <div className="row gy-4 d-flex justify-content-center">
          <div className="spinner-border m-5" roler="status"></div>
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
            <div
              className={styles.card}
              key={cat.id}
              onClick={() => {
                redirigir(`buscar?categoria=${cat.titulo}`)
              }}
              >
              <div className={styles.card}>
                <img src={cat.urlImagen} alt={cat.titulo}/>
                <p className={styles.cardTitulo}>{cat.titulo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
