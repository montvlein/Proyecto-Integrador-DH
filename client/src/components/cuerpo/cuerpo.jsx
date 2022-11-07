import styles from "./cuerpo.module.css";
import SearchBar from "./barraBusqueda/searchCiudad";
import FechaReserva from "./barraBusqueda/fechaReserva";
import Heroe from "./heroe/heroe";
import Categorias from "../Categorias/categorias"
import ListadoDeAutos from "../cardsAutos/listadoDeAutos";
import GaleriaProducto from "../producto/galeriaProducto/galeriaProducto";
import Producto from "../producto/producto"



const Cuerpo = () => {

  function handlerSubmit(evento) {
    evento.preventDefault()
  }

  return (
    <main>
        <Producto></Producto>
    </main>
  );
};

export default Cuerpo;

/*BODY: BACKGROUND COLOR + 100*/
