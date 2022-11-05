import React from 'react';
import CabeceraProducto from './cabeceraProducto';
import DatosUbicacionProducto from './datosubicacionPorducto';
import ImgProducto from './imgProducto';
import DescripcionProducto from './descripcionProducto';
import CaracteristicasProducto from './caracteristicasProducto';
import PoliticasPorducto from './politicasProducto';
import stylesArticlulo from './contenedorPorducto.module.css'


export default function Producto() {
  return (
    <article className={stylesArticlulo.productoArticulo}>
      <CabeceraProducto />
      <DatosUbicacionProducto />
      <ImgProducto />
      <DescripcionProducto />
      <CaracteristicasProducto />
      <PoliticasPorducto />
    </article>
  )
}
