import CrearPoliticasProducto from "./PoliticasProducto/politicasProducto";
import AgregarAtributos from "./AgregarAtributos/agregarAtributo3";
import CabeceraCrearProducto from "./CabeceraCrearProducto/cabeceraCrearProducto.module";
import CargarImagenes from "./CargarImagenes/cargarImagenes";
import DatosProducto from "./DatosProducto/datosProducto";
import styles from "./formularioProducto.module.css";

export default function FormularioCreacionProducto() {



  return (
    <>
      <CabeceraCrearProducto></CabeceraCrearProducto>
      <section className="container-md">
        <div className={styles.contenedorPadre}>
          <h3 className={styles.titulo}>Crear auto</h3>
          <DatosProducto></DatosProducto>
          <AgregarAtributos/>
          <CrearPoliticasProducto></CrearPoliticasProducto>
          <CargarImagenes></CargarImagenes>
          <div className={styles.botonReservaContainer}>
            <button className={styles.botonNuevo} type="submit">
              <span>Crear</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
