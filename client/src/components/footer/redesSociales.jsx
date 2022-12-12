import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function RedesSociales() {
    return (
        <div className={styles.redes}>
          <FontAwesomeIcon icon={["fab", "facebook"]} className={styles.iconosRedes}/>
          <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.iconosRedes}/>
          <FontAwesomeIcon icon={["fab", "twitter"]} className={styles.iconosRedes}/>
          <FontAwesomeIcon icon={["fab", "instagram"]} className={styles.iconosRedes}/>
      </div>
    )
}

export default RedesSociales;