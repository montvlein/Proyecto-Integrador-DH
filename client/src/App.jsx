import './App.css';
import Cabecera from './components/cabecera';
import Cuerpo from './components/cuerpo';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Cabecera/>
      <Routes>
        <Route path="/" element={<Cuerpo/>}/>
        <Route path="/iniciarSesion" element={"iniciar sesion"}/>
        <Route path="/crearCuenta" element={"crear cuenta"}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
