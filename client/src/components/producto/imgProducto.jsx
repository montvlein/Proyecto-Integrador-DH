import styles from "./imgProducto.module.css";
import ImageSlider from "./galeriaProducto/slider";
import { useState, useContext, useEffect } from "react";
import Contexto from "../../contexto/AppContext";
import { DigitalBookingApi } from "../../data/conexionAPI";

export default function ImgProducto({ imagenes, toggle, id }) {
  const { getUsuario } = useContext(Contexto);
  const corazonVacio = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACl0lEQVRIie2UTWxMYRSGn/PNHUOnYoe0TbRy55YuSCNqW7EQMx0sqB0LQWjsa8kKkdi0SScsGpFIqATzUxEJW7HBYrR3rp8FDWumdMbcYzEzMp3OT1l7l+ee93nP+b7cD/6rjaS+8Ki/v8/4/jgQBTYDXxF5XCqVLh96984DSG7dGpFAYBzYD2wCvgBp35grB+fnPzQNSNn2fkRmgM4GwxRVZExAUJ0Agg16vqnqkbjnPakWTO3kVbhCyhcZ0nw+LDCIyF0gKKoJVKeAICL3BAY1nw/7IkNAGlgvIjPpvr4tVa71J6l8LJ0KqXguF6+Z6hVwLOk4aVG9CYjAqZjrTtf0vARGUpFICohhWePA2WUbVM4cY8zFBqsTd91bAicEjsdyuelGPSpyCUArrGUbABsB8pY118gMEMvl7jT7BvAjGMx2FApQvnjqN1gACBcKditIK61bWnJqWfUBswCqevJfA8SYqvfxioBAIHAVWELkdMa2B/4WnnScbZSHKyJybUXAgbm5j6jeANaoyHTGtkOrhT/r7V0rcBsIoZoYcd33KwIAFkOhC0BWYbcvktAGf3q9FGTRshKo7gKyFcYfrQBkbHvAF3kBdKrq5IjnnRfQZvC040ygeg74blT3RD0vW9tj6k1Rz8uqyGHgp4iMZSKR682mz0QilyvwghEZrYc33KCqpOMcFtXyEwFTHd3d5/c+f/4L4NnwsJX//HkCOEP5jRqNu+6DRpyWZ5x0nH2ieh/YADwtFotHTShUCvj+HSAGfDcio1HXnW3GaHuJD/v7dwR8Pw30AG8r5e3Ap5IxsUPz829a+dsGAGRsu8cXSQE7K6XXRnUk6nmf2nlXFQCQ7OrqkHB4EkDz+bH4wsLiar3/1VK/ARU+7csdGSxsAAAAAElFTkSuQmCC"
  const corazonLleno =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABtklEQVRIie2UMWsUQRTHf28ggYPzzlyhKdJY2Ag2NhZiERHu3BMsDOJ38AN4YC/aCIIE8hUkTSCJZwobsYpFSEAQoiJEjEr2Mjk5ISbvWSS3LLe3ux7ZMv9u38z8fm+GmYXT5EQGC6+r1QvqXAsIgEngB2ZtUX3S2NvbBFipVC6qcy0TqQPngW1gyak+rXv/JVXwqlarYzYPlIc089dEHggIZi+AsSFzuiYyE4ThSkJw3Pl6CrwfS9t5XKJml5u7u18BXL96fCxZ8D44Cw5wRkRa/Q8XGwhyFo6SiBUXnCuKLkeXIyH4XpQA+DZMsFigIGJFgkPVZ8BBAfBDU32eENz2/jMwV4BgNvD+U0IA4MbHHwKbJ4B/PCiVWvFC4k4v12qXnNk7g7MjwrsK15qdzka86AZnBWH4wUTuA/sjwPdNZGYQDhmvcrlavSHOLZD/unsicrcRhu1hg5nPvj0xcd2OrlwlZcpvU70TeP8mjZE4onganc5bnLsJ/Eq2Jj9VdToLnisAuLWzs2oiVzBbjdiwhurVpvfv89bn/RmjvJyaKlV6vcemat1y+dG9ra0//7v2NJn5BzJukuOZmLIgAAAAAElFTkSuQmCC"
  const [corazon, setCorazon] = useState(corazonVacio)
  const [faveado, setFaveado] = useState(false)

  const backgroundImagen = (index) => {
    return {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${imagenes[index].url})`,
    };
  };

  useEffect(()=>{
    for (let index = 0; index < getUsuario()?.favoritos?.length; index++) {
      const element = getUsuario()?.favoritos[index]
      element === id ? setFaveado(true):null
    }
    faveado?setCorazon(corazonLleno):setCorazon(corazonVacio)
  }, [faveado])

  function like() {
    if (getUsuario().id) {
      const fav = {
        "token": localStorage.getItem("DigitalToken"),
        "autoId": id
      }
      if (corazon === corazonVacio) {
          DigitalBookingApi.usuario.agregarFavorito(fav)
          .then(res => res.status == 200?setCorazon(corazonLleno):null)
        } else {
          DigitalBookingApi.usuario.eliminarFavorito(fav)
          .then(res=> setCorazon(corazonVacio))
        }
      }
  }

  return (
    <>
      <section className={styles.contenedorPadre}>
        <div className={styles.angryGrid}>

          <div className={styles.compartirLikeImgProd}>
            <div className={styles.iconoContenedor}>
              <img src={corazon} className={styles.icon} onClick={like} />
            </div>
          </div>

          {imagenes.map((img, index) => (
            <div
              className={`${index === 0 ? styles.item0 : ""} ${
                styles.itemGrid
              }`}
              style={backgroundImagen(index)}
              key={img.id}
            >
              &nbsp;
            </div>
          ))}

          <div className={styles.verMas} onClick={toggle}>
            <p>Ver más</p>
          </div>

        </div>

        <div className={styles.carruselContenedor}>
          <ImageSlider slides={imagenes} toggle={toggle} />
        </div>
      </section>
    </>
  );
}
