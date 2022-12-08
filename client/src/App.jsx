import Cabecera from "./components/cabecera/cabecera";
import Index from "./components/cuerpo/cuerpo";
import Footer from "./components/footer/footer";
import Login from "./components/formularios/login";
import Registro from "./components/formularios/registro";
import Producto from "./components/producto/producto";
import Exito from "./components/Exito/exito";
import NotFound from "./components/NotFound/notFound";
import Perfil from "./components/Usuario/perfil";
import ReservaComponent from "./components/Reserva/reserva";
import { Route, Routes } from "react-router-dom";
import ResultadosBusqueda from "./components/Autos/resultadosBusqueda";
import FormularioCreacionProducto from "./components/formularioProducto/formularioProducto";
import MisReservas from "./components/Usuario/misReservas/misReservas";
import { Fragment, useContext } from "react";
import Contexto from "./contexto/AppContext";
import ProductoExitoso from "./components/administrador/productoExitoso/productoExitoso";
import Favoritos from "./components/Usuario/favoritos/favoritos";

function App() {
  const { getUsuario } = useContext(Contexto)

  return (
    <>
      <Cabecera />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/iniciarSesion" element={<Login />} />
          <Route path="/crearCuenta" element={<Registro />} />
          <Route path="/producto/:idProducto" element={<Producto />} />
          <Route path={`/producto/:idProducto/reserva`} element={<ReservaComponent />} />
          <Route path={`/buscar`} element={<ResultadosBusqueda />} />
          <Route path={`/exito`} element={<Exito />} />
          <Route path="*" element={<NotFound/>} />
          <Route path={`/productoExitoso`} element={<ProductoExitoso />} />
          <Route path={`/miperfil`} element={<Perfil/>}/>
          { getUsuario().esAdmin?
          <Route path={`/miperfil/crearProducto`} element={<FormularioCreacionProducto/>}/>:
          (<Fragment>
          <Route path={`/miperfil/reservas`} element={<MisReservas idUsuario={getUsuario().id}/>}/>
          <Route path={`/miperfil/favoritos`} element={<Favoritos />}/>
          </Fragment>)
          }
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
