import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div>
        <div className="contenedorImgPequeñas">
          <div className="Caps">
            <Link to={"/Shop/caps"}>
              <img
                className="img"
                src="https://res.cloudinary.com/do9rcgcca/image/upload/v1690306569/hipster-guapo-modelo-masculino-con-el-uso-de-barba-negra-en-blanco-gorra-con-espacio-para-su_jvxzwl.jpg"
              />
              <div className="TituloLink">CAPS</div>
            </Link>
          </div>
          <div className="Caps">
            <Link to={"/Shop/jackets"}>
              <img
                className="img"
                src="https://res.cloudinary.com/do9rcgcca/image/upload/v1690307354/make-it-yours-royal-enfield-lanza-una-linea-de-camperas-de-la-mano-de-knox-y-d3o_sfmmqd.jpg"
              />
              <div className="TituloLink">JACKETS</div>
            </Link>
          </div>
          <div className="Caps">
            <Link to={"/Shop/shoes"}>
              <img
                className="img"
                src="https://res.cloudinary.com/do9rcgcca/image/upload/v1690307422/images_h7apar.jpg"
              />
              <div className="TituloLink">SHOES</div>
            </Link>
          </div>
        </div>

        <div className="contenedorImgGrandes">
          <div className="Mens">
            <Link to={"/Shop/Men"}>
              <img
                className="img"
                src="https://res.cloudinary.com/do9rcgcca/image/upload/v1690308087/retrato-guapo-modelo-lambersexual-hipster-estilo-seguro-hombre-vestido-chaqueta-negra-jeans-hombre-moda-posando-estudio-cerca-pared-gris_158538-24002_eupn23.jpg"
              />
              <div className="TituloLinkGrande">MEN</div>
            </Link>
          </div>
          <div className="Woman">
            <Link to={"/Shop/Woman"}>
              <img
                className="img"
                src="https://res.cloudinary.com/do9rcgcca/image/upload/v1690308114/tres-jovenes-hermosas-chicas-sonrientes-ropa-casual-moda-verano-sexy-mujer-despreocupada-posando-modelos-positivos_158538-4728_wy2dmr.jpg"
              />
              <div className="TituloLinkGrande">WOMAN</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
