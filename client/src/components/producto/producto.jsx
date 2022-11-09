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
      <article className={stylesArticlulo.productoArticulo}>
        <div className="spinner-border" roler="status"></div>
      </article>
    )
  }

  producto.imagenes = images

  return (
    <article className={`${stylesArticlulo.productoArticulo} container`}>
      <CabeceraProducto nombre={producto.nombre} categoria={producto.categoria.titulo} />
      <DatosUbicacionProducto ubicacion={producto.ciudad}/>
      <ImgProducto isOpen={isOpen} toggle={toggle}/>
      <GaleriaProducto isOpen={!isOpen} toggle={toggle} imagenes={producto.imagenes}/>
      <CaracteristicasProducto caracteristicas={producto.caracteristica}/>
      <DescripcionProducto descripcion={producto.descripcion}/>
      <BloqueReserva/>
      <PoliticasProducto />
      <Heroe></Heroe>
    </article>
  )
}

const images = [
  {
    url: "https://www.megautos.com/wp-content/uploads/2019/09/chevrolet-onix-plus-premier-2020-delantera.jpg",
    title: "auto",
  },
  {
    url: "https://www.autoweb.com.ar/wp-content/uploads/2020/09/Onix-RS-17.jpg",
    title: "auto1",
  },
  {
    url: "https://www.autoweb.com.ar/wp-content/uploads/2021/12/chevrolet-joy-1024x682.jpeg",
    title: "auto2",
  },
  {
    url: "https://cdn.motor1.com/images/mgl/02LE2/s3/critica-chevrolet-onix-1-0-turbo-ltz-automatico.jpg",
    title: "auto3",
  },
  {
    url: "https://autotest.com.ar/wp-content/uploads/2021/03/CHEVROLET-ONIX-RS-1.jpg",
    title: "auto4",
  },
];
