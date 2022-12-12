import styles from "../misReservas/misreservas.module.css";
import { useEffect, useState } from "react";
import { DigitalBookingApi } from "../../../data/conexionAPI";
import Card2 from "../../Autos/card2";
import CargandoAuto from "../../Autos/cargandoAuto";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    DigitalBookingApi.usuario.infoToken(localStorage.getItem("DigitalToken")).then( usuario => {
      setFavoritos(usuario.favoritos)
      setCargando(false);
    });
  }, []);


  return (

    <section>
      <div className={styles.contenedorTitulos}>
        <h3 className={styles.tituloMisReservas}>Favoritos</h3>
      </div>
      <section className={styles.contenedorFavoritos}>

        { cargando? (
          <section className="d-flex justify-content-center w-100">
            <div className="spinner-border m-5" roler="status"></div>
          </section>
        ) : favoritos.length > 0 ?
            (favoritos.map(id => <Favorito id={id} />)) :(
                 <h4 className={styles.subtituloMisReservas}>No tines favoritos</h4>)
        }
      </section>
    </section>
  );
}

function Favorito({id}) {
    const [auto, setAuto] = useState("")

    useEffect(()=>{
        DigitalBookingApi.auto.buscarPorID(id)
        .then(auto => setAuto(auto))
    }, [])

    return auto != "" ?
    (<Card2 {...auto} />):
    (<CargandoAuto/>)
}