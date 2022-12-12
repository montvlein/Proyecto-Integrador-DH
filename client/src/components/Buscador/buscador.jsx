import styles from "../cuerpo/cuerpo.module.css";
import SearchBar from "../cuerpo/barraBusqueda/searchCiudad";
import FechaReserva from "../cuerpo/barraBusqueda/fechaReserva";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../../contexto/AppContext";

export default function Buscador() {
  const redirigir = useNavigate()
  const { setCiudadBusqueda, busqueda } = useContext(Contexto)

  function handlerSubmit(evento) {
    evento.preventDefault();
    setCiudadBusqueda(evento.target.buscadorCiudad.value.split(",")[0])
    if (busqueda.ubicacion && busqueda.fechaFinal && busqueda.fechaFinal) {
        redirigir(`buscar?ciudad=${busqueda.ubicacion}&fechaInicio=${busqueda.fechaInicio}&fechaFinal=${busqueda.fechaFinal}`)
    }
    else if (busqueda.fechaFinal && busqueda.fechaFinal) {
      redirigir(`buscar?fechaInicio=${busqueda.fechaInicio}&fechaFinal=${busqueda.fechaFinal}`)
  }

  else if (busqueda.ubicacion) {
    redirigir(`buscar?ciudad=${busqueda.ubicacion}`)
}
  }

  return (
    <form className="d-flex justify-content-center" onSubmit={handlerSubmit}>
      <div className={styles.barraBusqueda}>
        <div className={styles.contenedorBuscador}>
          <SearchBar />
        </div>
        <div className={styles.contenedorFechas}>
          <FechaReserva />
        </div>
        <div className={styles.botonNavBuscador}>
            <button className={styles.botonBarra} >Buscar</button>
        </div>
      </div>
    </form>
  );
}
