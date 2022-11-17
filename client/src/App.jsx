import Cabecera from "./components/cabecera/cabecera";
import Index from "./components/cuerpo/cuerpo";
import Footer from "./components/footer/footer";
import Login from "./components/formularios/login";
import Registro from "./components/formularios/registro";
import Producto from "./components/producto/producto";
import Exito from "./components/Exito/exito";
import Reserva from "./components/Reserva/reserva";
import { Route, Routes } from "react-router-dom";
import ResultadosBusqueda from "./components/Autos/resultadosBusqueda";

function App() {
  return (
    <>
      <Cabecera />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/iniciarSesion" element={<Login />} />
          <Route path="/crearCuenta" element={<Registro />} />
          <Route path="/producto/:idProducto" element={<Producto />} />
          <Route path={`/producto/:idProducto/reserva`} element={<Reserva />} />
          <Route path={`/buscar`} element={<ResultadosBusqueda />} />
          <Route path={`/miyu`} element={<Exito />} />
          <Route path={`/exito`} element={<Exito />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
