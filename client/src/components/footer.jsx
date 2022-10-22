import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const Footer = () => {
   
    return(
        <footer className={styles.footer} class="p-3 text-bg-dark">
            <p>©2021 Digital Booking</p>
        <div className={styles.redes}>
        
            <p><FontAwesomeIcon icon={["fab", "facebook"]}/></p>
            <p><FontAwesomeIcon icon={["fab", "linkedin"]}/> </p>
            <p><FontAwesomeIcon icon={["fab", "twitter"]}/></p>
            <p><FontAwesomeIcon icon={["fab", "instagram"]}/></p>
        </div>
        </footer>
    )
}

export default Footer;

/*
100%
a la izquierda -> isologo del ano + copyright
a la derecha -> redes sociales (sin vincular) fb/lkn/insta
*/ 