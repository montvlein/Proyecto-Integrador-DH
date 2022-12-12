import React from 'react';
import CabeceraProducto from './cabeceraProducto';
import DatosUbicacionProducto from './datosubicacionPorducto';
import ImgProducto from './imgProducto';
import DescripcionProducto from './descripcionProducto';
import CaracteristicasProducto from './caracteristicasProducto';
import PoliticasProducto from './politicasProducto';
import stylesArticlulo from './contenedorPorducto.module.css'
import { useState, useEffect } from 'react';
import GaleriaProducto from './galeriaProducto/galeriaProducto';
import BloqueReserva from './bloqueReserva/bloqueReserva';
import Heroe from './heroe/heroeProductos';
import { DigitalBookingApi } from "../../data/conexionAPI";
import { useParams } from 'react-router-dom';

export default function Producto() {
  const { idProducto } = useParams()
  const [cargando, setEstaCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };


  useEffect(() => {
    DigitalBookingApi.auto.buscarPorID(idProducto).then((auto) => {
      setProducto(auto);
      setEstaCargando(false);
    });
  }, []);

  if (cargando) {
    return(
      <article className={`${stylesArticlulo.productoArticulo} container`}>
        <CabeceraProducto nombre={""} categoria={""} yendo={"/"}/>

        <section className={`loading_background m-5`} style={{height:"500px"}}>
            <div className={`loading_animation`}></div>
        </section>

        <section>
          <h3>Caracteristicas</h3>
          <hr></hr>
          <div className='d-flex justify-content-center'>
            <div className="spinner-border m-5" roler="status"></div>
          </div>
        </section>
        <section>
          <h3>Encontrá tu auto</h3>
          <hr></hr>
          <div className='d-flex justify-content-center'>
            <div className="spinner-border m-5" roler="status"></div>
          </div>
        </section>
        <BloqueReserva/>
        <PoliticasProducto />
        <Heroe></Heroe>
      </article>
    )
  }

  return (
    <article className={`${stylesArticlulo.productoArticulo} container`}>
      <CabeceraProducto nombre={producto.nombre} categoria={producto.categoria} />
      <DatosUbicacionProducto ubicacion={producto.ciudad}/>
      <ImgProducto isOpen={isOpen} toggle={toggle} imagenes={producto.imagenes} id={producto.id}/>
      <GaleriaProducto isOpen={!isOpen} toggle={toggle} imagenes={producto.imagenes}/>
      <CaracteristicasProducto caracteristica={producto.caracteristica}/>
      <DescripcionProducto descripcion={producto.descripcion}/>
      <BloqueReserva producto={producto}/>
      <PoliticasProducto />
      <Heroe></Heroe>
    </article>
  )
}
