import "./Home.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div>
      {/* <Carousel showThumbs={false} showStatus={false}>
        <div style={{ marginTop: "20px", height: "40", width: "100%" }}>
          <img
            style={{ height: "40vh", width: "100%", border: "solid black 1px" }}
            src="https://res.cloudinary.com/do9rcgcca/image/upload/v1691716044/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector_zl9tqn.jpg"
            alt="Imagen 3"
          />
        </div>

        <div style={{ marginTop: "20px", height: "40", width: "100%" }}>
          <img
            style={{ height: "40vh", width: "100%", border: "solid black 1px" }}
            src="https://res.cloudinary.com/do9rcgcca/image/upload/v1691703972/venta-de-promo-invierno-vectorial-banner-web-o-afiche-para-ecommerce-en-l_C3_ADnea-cosm_C3_A9ticos-tienda-moda-belleza-con-dise_C3_B1o-187089966_mkpmbw.jpg"
            alt="Imagen 2"
          />
        </div>
        <div style={{ marginTop: "20px", height: "40vh", width: "100%" }}>
          <img
            style={{ height: "40vh", width: "100%", border: "solid black 1px" }}
            src="https://res.cloudinary.com/do9rcgcca/image/upload/v1691704024/dise_C3_B1o-de-plantilla-banner-venta-web-gran-o-afiche-para-tienda-cosm_C3_A9ticos-online-ecommerce-vector-fondo-corte-papel-abertura-187679485_lvfboj.jpg"
            alt="Imagen 1"
          />
        </div>
      </Carousel> */}

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
