import React from 'react';
import stylesCabeceraProd from './cabeceraProducto.module.css';
import stylesDatosProd from './datosProducto.module.css';
import stylesImagenProd from './imgProducto.module.css';
import stylesDescripcionProd from './descripcionProducto.module.css';
import stylesCaracteristicasProd from './caracteristicasProducto.module.css';
import stylesPoliticasProd from './politicasProducto.module.css';
import stylesOpcionVolver from './datosProducto.module.css';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function Producto() {
  return (
    <article>
      <CabeceraProducto />
      <DatosProducto />
      <ImgProducto />
      <DescripcionProducto />
      <CaracteristicasProducto />
      <PoliticasPorducto />
    </article>
  )
}

function CabeceraProducto() {
  return (
    <section className={stylesCabeceraProd.seccionCabeceraProducto}>
      <div>
        <p>Categoria del producto</p>
        <p>Título de producto</p>
      </div>
      <div className={stylesOpcionVolver.seccionCabeceraProducto}>
        <FontAwesomeIcon icon={faArrowLeft}/>
      </div>
    </section>
  )
}

function DatosProducto() {
  return (
    <section className={stylesDatosProd.seccionDatosProducto}>
      DATOS PRODUCTO
    </section>
  )
}

function ImgProducto() {
  return (
    <section className={stylesImagenProd.seccionImagenProducto}>
      IMAGEN PRODUCTO
    </section>
  )
}

function DescripcionProducto() {
  return (
    <section className={stylesDescripcionProd.seccionDescripcionProducto}>
      DESCRIPCION PRODUCTO
    </section>
  )
}

function CaracteristicasProducto() {
  return (
    <section
      className={stylesCaracteristicasProd.seccionCaracteristicasPorducto}
    >
      CARACTERISTICAS PRODUCTO
    </section>
  )
}

function PoliticasPorducto() {
  return (
    <section className={stylesPoliticasProd.seccionPoliticasPorducto}>
      POLITICAS PRODUCTO
    </section>
  )
}
