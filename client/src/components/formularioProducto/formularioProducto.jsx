import CrearPoliticasProducto from "./PoliticasProducto/politicasProducto";
import AgregarAtributos from "./AgregarAtributos/agregarAtributo3";
import CabeceraCrearProducto from "./CabeceraCrearProducto/cabeceraCrearProducto.module";
import CargarImagenes from "./CargarImagenes/cargarImagenes2";
import DatosProducto from "./DatosProducto/datosProducto";
import styles from "./formularioProducto.module.css";
import { DigitalBookingApi } from "../../data/conexionAPI";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function FormularioCreacionProducto() {
  const redirigir = useNavigate()
  const [cantImagenes, setCantImagenes] = useState(0)

  function crearProducto(evento) {
    evento.preventDefault()
    const modelo =  evento.target.elements.nombreProducto.value
    const descripcion = evento.target.elements.descripcion.value
    const precio = evento.target.elements.precio.value
    const categoriaId = evento.target.elements.categoriaID.value
    const ciudadId = evento.target.elements.ciudadID.value
    const direccion = evento.target.elements.direccion.value
    const modeloId = {"id": evento.target.elements.modelo.value}
    const puertasId = {"id": evento.target.elements.puertas.value}
    const consumoId = {"id": evento.target.elements.consumo.value}
    const motorId = {"id": evento.target.elements.motor.value}
    const cajaId = {"id": evento.target.elements.caja.value}
    const caracteristicas = [modeloId, consumoId, puertasId, motorId, cajaId]
    let autoNuevo = {
      "nombre":modelo,
      "descripcion" : descripcion,
      "precio": precio,
      "categoria":{
        "id": categoriaId
      },
      "ciudad": {
        "id": ciudadId
      },
      "direccion":direccion,
      "caracteristicas": caracteristicas
    }

    DigitalBookingApi.auto.crear(autoNuevo)
    .then(auto => {
      for (let index = 0; index <= cantImagenes; index++) {
        const pos = `imagen${index}`
        const imagen = {
          "titulo": `Modelo ${modelo}`,
          "url": evento.target.elements[pos].value,
          "auto": {"id": auto.id}
        }
        DigitalBookingApi.imagen.crear(imagen)
      }
      redirigir("/productoExitoso")
    })
  }

  return (
    <>
      <CabeceraCrearProducto/>
      <section className="container-md">
        <form className={styles.contenedorPadre} onSubmit={crearProducto}>
          <h3 className={styles.titulo}>Crear auto</h3>
          <DatosProducto/>
          <AgregarAtributos/>
          <CrearPoliticasProducto/>
          <CargarImagenes setCantImagenes={setCantImagenes} cantImagenes={cantImagenes} />
          <div className={styles.botonReservaContainer}>
            <button className={styles.botonNuevo} type="submit">
              <span>Crear</span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
