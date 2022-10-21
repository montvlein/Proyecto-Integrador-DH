import styles from "../styles/footer.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p>©2021 Digital Booking</p>
        <div className={styles.redes}>
            <FontAwesomeIcon icon={['fas', 'fasInstagram']}/>
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <p>Facebook</p>
            <p>Linkedin</p>
            <p>Twitter</p>
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