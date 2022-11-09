import React from 'react';
import CabeceraProducto from './cabeceraProducto';
import DatosUbicacionProducto from './datosubicacionPorducto';
import ImgProducto from './imgProducto';
import DescripcionProducto from './descripcionProducto';
import CaracteristicasProducto from './caracteristicasProducto';
import PoliticasPorducto from './politicasProducto';
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
      console.log(auto)
      setProducto(auto);
      setEstaCargando(false);
    });
  }, []);

  if (cargando) {
    return(
      <article className={stylesArticlulo.productoArticulo}>
        <div className="spinner-border" roler="status"></div>
      </article>
    )
  }

  return (
    <article className={stylesArticlulo.productoArticulo}>
      <CabeceraProducto />
      <DatosUbicacionProducto />
      <ImgProducto isOpen={isOpen} toggle={toggle}/>
      <GaleriaProducto isOpen={!isOpen} toggle={toggle}></GaleriaProducto>
      <DescripcionProducto />
      <CaracteristicasProducto />
      <BloqueReserva></BloqueReserva>
      <PoliticasPorducto />
      <Heroe></Heroe>
    </article>
  )
}
