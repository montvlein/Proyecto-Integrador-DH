import { useState, useEffect } from "react";
import { DigitalBookingApi } from "../../data/conexionAPI";
import Card2 from "./card2";
import CargandoAuto from "./cargandoAuto";
import styles from "./estilosCard.module.css";

export default function Recomendados() {
  const [cargando, setEstaCargando] = useState(true);
  const [recomendados, setRecomendados] = useState([]);

  useEffect(() => {
    DigitalBookingApi.auto.recomendados().then((autos) => {
      setRecomendados(autos);
      setEstaCargando(false);
    });
  }, []);



  if (cargando) {
    return (
      <section className="container">
        <div>
          <div>
            <h3>Recomendaciones</h3>
            <hr></hr>
          </div>
        </div>
        <div className={styles.contenedorCards}>
          <CargandoAuto/>
          <CargandoAuto/>
          <CargandoAuto/>
          <CargandoAuto/>
          <CargandoAuto/>
          <CargandoAuto/>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contenedorRecomendados}>
      <div className="container">
        <div>
          <h3>Recomendaciones</h3>
          <hr></hr>
        </div>
        <div className={styles.contenedorCards}>
          {recomendados.map((auto) => {
            if (recomendados.length = 6) {
            return <div key={auto.id}>
              <Card2 {...auto} />
            </div>}
          })}
        </div>
      </div>
    </section>
  );
}
