import React from 'react';
import CabeceraProducto from './cabeceraProducto';
import DatosUbicacionProducto from './datosubicacionPorducto';
import ImgProducto from './imgProducto';
import DescripcionProducto from './descripcionProducto';
import CaracteristicasProducto from './caracteristicasProducto';
import PoliticasPorducto from './politicasProducto';
import stylesArticlulo from './contenedorPorducto.module.css'
import { useState } from 'react';
import GaleriaProducto from './galeriaProducto/galeriaProducto';


export default function Producto() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <article className={stylesArticlulo.productoArticulo}>
      <CabeceraProducto />
      <DatosUbicacionProducto />
      <ImgProducto isOpen={isOpen} toggle={toggle}/>
      <GaleriaProducto isOpen={!isOpen} toggle={toggle}></GaleriaProducto>
      <DescripcionProducto />
      <CaracteristicasProducto />
      <PoliticasPorducto />
    </article>
  )
}
