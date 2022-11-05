import React from 'react';
import CabeceraProducto from './cabeceraProducto';
import DatosUbicacionProducto from './datosubicacionPorducto';
import ImgProducto from './imgProducto';
import DescripcionProducto from './descripcionProducto';
import CaracteristicasProducto from './caracteristicasProducto';
import PoliticasPorducto from './politicasProducto';


export default function Producto() {
  return (
    <article>
      <CabeceraProducto />
      <DatosUbicacionProducto />
      <ImgProducto />
      <DescripcionProducto />
      <CaracteristicasProducto />
      <PoliticasPorducto />
    </article>
  )
}
