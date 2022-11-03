import Cabecera from "./components/cabecera/cabecera"
import Cuerpo from './components/cuerpo/cuerpo';
import Footer from './components/footer/footer';
import Login from './components/formularios/login';
import Registro from './components/formularios/registro';
import Producto from "./components/producto/producto";
import { Route, Routes } from 'react-router-dom';


function App() {



  return (
    <>
    <Cabecera/>
    <main>
    <Routes>
        <Route path="/" element={<Cuerpo/>}/>
        <Route path="/iniciarSesion" element={<Login/>}/>
        <Route path="/crearCuenta" element={<Registro/>}/>
        <Route path="/producto" element={<Producto/>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
//