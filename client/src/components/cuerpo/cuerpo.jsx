import Heroe from "./heroe/heroe";
import Categorias from "../Categorias/categorias";
import Recomendados from "../Autos/recomendados";
import Destinos from "./destinos/principalesDestinos";
import Buscador from "../Buscador/buscador";
import { Fragment } from "react";
import CategoriasNuevas from "../Categorias/categoriasNuevas";

const Index = () => {
  return (
    <Fragment>
      <Heroe />
      <Buscador/>
      <CategoriasNuevas />
      <Recomendados />
      <Destinos/>
    </Fragment>
  );
};

export default Index;
