import './App.css';
import Cabecera from './components/cabecera';
import Cuerpo from './components/cuerpo';
import Footer from './components/footer';
import Login from './components/usuarioLogin/login';
import RegistroForm from './components/registroForm/registroForm';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Cabecera/>
    <main>
      <Routes>
        <Route path="/" element={<Cuerpo/>}/>
        <Route path="/iniciarSesion" element={<Login/>}/>
        <Route path="/crearCuenta" element={<RegistroForm/>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
