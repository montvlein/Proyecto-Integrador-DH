import styles from "./footer.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import RedesSociales from "./redesSociales";

library.add(fab, faCheckSquare, faCoffee);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedorCopyright}>
        <p>©2022 Digital Booking</p>
      </div>
      <div><RedesSociales/></div>
    </footer>
  );
};

export default Footer;

/*
100%
a la izquierda -> isologo del ano + copyright
a la derecha -> redes sociales (sin vincular) fb/lkn/insta
*/
