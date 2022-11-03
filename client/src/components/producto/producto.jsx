import React from "react";
import componentsCabecera from "../cabecera" // esto?
import styles from "./cabeceraProducto.module.css";

export default function Producto() {
   return( 
        <article>
            <CabeceraProducto />
                <div className={styles.CabeceraProducto}></div>

                
            <DatosProducto/>
            <ImgProducto/>
            <DescripcionProducto/>
            <CaracteristicasProducto/>
            <PoliticasPorducto/>
        </article>
    ) 
}

function CabeceraProducto(){
    return(
        <section>
            CABECERA PRODUCTO
        </section>
    )
}

function DatosProducto(){
    return(
        <section>
            DATOS PRODUCTO
        </section>
    )
}

function ImgProducto(){
    return(
        <section>
            IMAGEN PRODUCTO
        </section>
    )
}

function DescripcionProducto(){
    return(
        <section>
            DESCRIPCION PRODUCTO
        </section>
    )
}

function CaracteristicasProducto(){
    return(
        <section>
            CARACTERISTICAS PRODUCTO
        </section>
    )
}

function PoliticasPorducto(){
    return(
        <section>
            POLITICAS PRODUCTO
        </section>
    )
}


