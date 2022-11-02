import styles from "../cabecera.module.css";
import SesionResponsive from "./sesionResponsive"




function MenuResponsive({ isOpen, toggle }) {
  return (
    <div className={isOpen ? styles.menuPadreMostrar : styles.menuPadre } isOpen={isOpen}>
      <SesionResponsive toggle={toggle}/>
    </div>
  );
}

export default MenuResponsive;
