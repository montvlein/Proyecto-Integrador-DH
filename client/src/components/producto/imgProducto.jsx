import React from 'react';
import stylesImagenProd from './imgProducto.module.css';
import imgPrincipal from '../../assets/front.jpg';
import imgSecundaria from '../../assets/wheel.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function ImgProducto() {
  return (
    <section>
      {
  
        <div className={stylesImagenProd.divContenedorSeccionImagenPorducto}>
          <div className={stylesImagenProd.compartirLikeImgProd}>
            <p>
              <FontAwesomeIcon icon={faShareNodes} />
            </p>
            <p>
              <FontAwesomeIcon icon={faHeart} />
            </p>
          </div>
          <div className={stylesImagenProd.imgPrincipal}>
            <img
              src={imgPrincipal}
              alt="Imagen principal"
              className={stylesImagenProd.imgPrincipal}
            />
          </div>
          <div className={stylesImagenProd.cuadriculaImgSec}>
            <div className={stylesImagenProd.imgUno}>
              <img
                img
                src={imgSecundaria}
                alt="Imagen secundaria"
                className={stylesImagenProd.imgUno}
              />
            </div>
            <div className={stylesImagenProd.imgDos}>
              <img
                img
                src={imgSecundaria}
                alt="Imagen secundaria"
                className={stylesImagenProd.imgDos}
              />
            </div>
            <div className={stylesImagenProd.imgTres}>
              <img
                img
                src={imgSecundaria}
                alt="Imagen secundaria"
                className={stylesImagenProd.imgTres}
              />
            </div>
            <div className={stylesImagenProd.imgCuatro}>
              <img
                img
                src={imgSecundaria}
                alt="Imagen secundaria"
                className={stylesImagenProd.imgCuatro}
              />
            </div>
          </div>

          <div className={stylesImagenProd.pieDePagImgProd}>
            <p>
              Renta tu auto en Buenos Aires
            </p>
          </div>
        </div>
      }
    </section>
  )
}
