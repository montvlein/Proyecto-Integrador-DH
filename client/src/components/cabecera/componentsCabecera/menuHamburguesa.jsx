import styles from "../cabecera.module.css";
import SesionResponsive from "./sesionResponsive"




function MenuResponsive({ isOpen, toggle }) {
  return (
    <div className={isOpen ? styles.menuPadreMostrar : styles.menuPadre }>
      <SesionResponsive toggle={toggle} isOpen={isOpen}/>
    </div>
  );
}

export default MenuResponsive;
