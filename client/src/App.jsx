import './App.css';
import Cabecera from './components/cabecera';
import Cuerpo from './components/cuerpo';
import Footer from './components/footer';
import Login from './components/formularios/login';
import Registro from './components/formularios/registro';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Cabecera/>
    <main>
      <Routes>
        <Route path="/" element={<Cuerpo/>}/>
        <Route path="/iniciarSesion" element={<Login/>}/>
        <Route path="/crearCuenta" element={<Registro/>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
