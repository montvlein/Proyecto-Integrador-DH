import styles from "./../../styles/cabecera.module.css";
import SesionResponsive from "./sesionResponsive"




function MenuResponsive({ isOpen, toggle }) {
  return (
    <div className={isOpen ? styles.menuPadreMostrar : styles.menuPadre } isOpen={isOpen}>
      <SesionResponsive toggle={toggle}/>
    </div>
  );
}

export default MenuResponsive;
