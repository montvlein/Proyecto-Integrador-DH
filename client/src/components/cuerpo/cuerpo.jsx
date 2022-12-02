import Heroe from "./heroe/heroe";
import Recomendados from "../Autos/recomendados";
import Destinos from "./destinos/principalesDestinos";
import Buscador from "../Buscador/buscador";
import { Fragment } from "react";
import Categorias from "../Categorias/categoriasNuevas";

const Index = () => {
  return (
    <Fragment>
      <Heroe />
      <Buscador/>
      <Categorias />
      <Recomendados />
      <Destinos/>
    </Fragment>
  );
};

export default Index;
