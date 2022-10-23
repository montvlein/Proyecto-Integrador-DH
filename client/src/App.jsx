import './App.css';
import Cabecera from './components/cabecera';
import Cuerpo from './components/cuerpo';
import Footer from './components/footer';



function App() {
  return (
    <>
    <Cabecera/>
    <Cuerpo/>
    <Footer/>
    </>
  )
}

export default App


/*
function App() {
  return (
    <BrowserRouter>
      <NavBar title="E-Commerce"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductContainer/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}
*/