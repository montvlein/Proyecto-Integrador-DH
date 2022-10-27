import { useContext } from "react"
import Contexto from "../../contexto/AppContext"
import styles from "./../../styles/categorias.module.css"

export default function Categorias() {
    const { getListaCategorias } = useContext(Contexto)

    return(
    <section className={styles.contenedorPadre}>
    <div className={styles.tituloCategorias}>
        <h3>Elige tu categoria<br></br> <span>We offer professional car rental & limousine services in our range of high-end vehicles</span></h3>
    </div>

    <div className={styles.categoria_section}>
        {
            getListaCategorias().map( cat => {
             return(
                <article className={styles.categoria_article} key={cat.ID}>
                    <figure className={styles.categoria_figure}>
                        <img src={cat.URL_IMG} alt={cat.DESCRIPCION} className={styles.categoria_img}/>
                        <figcaption className={styles.categoria_figcaption}> {cat.TITULO} </figcaption>
                    </figure>
                </article>
                )
            })
        }
        </div>
    </section>
    )
}