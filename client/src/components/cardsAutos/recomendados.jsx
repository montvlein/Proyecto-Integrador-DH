import { useState, useEffect } from "react";
import { DigitalBookingApi } from "../../data/conexionAPI";
import Card from "./card";
import styles from "./estilosCard.module.css"

export default function Recomendados() {
    const [cargando, setEstaCargando] = useState(true);
    const [recomendados, setRecomendados] = useState([]);

    useEffect(() => {
        DigitalBookingApi.auto.recomendados()
        .then((autos) => {
            setRecomendados(autos)
            setEstaCargando(false);
        })
      }, []);

    if (cargando) {
      return (
        <section className="container">
          <div className="tituloCards">
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
      <div className="container">
        <div className="tituloCards">
          <div>
            <h3>Recomendaciones</h3>
            <hr></hr>
          </div>
        </div>
        <div className="row gy-4">
          {recomendados.map((auto) => (
            <div className="col-md-4" key={auto.id}>
              <Card {...auto} />
            </div>
          ))}
        </div>
      </div>
    );
  }