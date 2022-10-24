import { useContext } from "react"
import Contexto from "../../contexto/AppContext"

export default function Categorias() {
    const { getListaCategorias } = useContext(Contexto)

    return(
    <section className="categoria_section">
        {
            getListaCategorias().map( cat => {
             return(
                <article className="categoria_article" key={cat.ID}>
                    <figure className="categoria_figure">
                        <img src={cat.URL_IMG} alt={cat.DESCRIPCION} className="categoria_img"/>
                        <figcaption className="categoria_figcaption"> {cat.TITULO} </figcaption>
                    </figure>
                </article>
                )
            })
        }
    </section>
    )
}