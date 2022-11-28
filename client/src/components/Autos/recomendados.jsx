import { useState, useEffect } from "react";
import { DigitalBookingApi } from "../../data/conexionAPI";
import Card2 from "./Prueba/card2";
import styles from "./estilosCard.module.css";

export default function Recomendados() {
  const [cargando, setEstaCargando] = useState(true);
  const [recomendados, setRecomendados] = useState([]);

  var recomendadosArray = Array.from(new Set(recomendados));
  console.log(recomendadosArray)

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
        <div className="row gy-4 d-flex justify-content-center">
          <div className="spinner-border m-5" roler="status"></div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <div>
          <h3>Recomendaciones</h3>
          <hr></hr>
        </div>
        <div className={styles.contenedorCards}>
          {recomendadosArray.map((auto) => {
            if (recomendadosArray.length = 6) {
            return <div>
              <Card2 {...auto} />
            </div>}
          })}
        </div>
      </div>
    </section>
  );
}
