import Heroe from "./heroe/heroe";
import Categorias from "../Categorias/categorias";
import Recomendados from "../Autos/recomendados";
import Destinos from "./destinos/principalesDestinos";
import Buscador from "../Buscador/buscador";

const Index = () => {
  return (
    <main>
      <Heroe />
      <Buscador/>
      <Categorias />
      <Recomendados />
      <Destinos></Destinos>
    </main>
  );
};

export default Index;
