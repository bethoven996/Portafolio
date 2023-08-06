import MenuResposiveContei from "./Componentes/layout/MenuResponsive/MenuResposiveContei";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./Componentes/pages/inicio/HomeContainer";
import "./App.css";
import SingInContainer from "./Componentes/pages/SingIn/SingInContainer";
import ShopContainer from "./Componentes/pages/Shop/ShopContainer";
import CheckoutContainer from "./Componentes/pages/Chekout/CheckoutContainer";
import SingIn from "./Componentes/pages/SingIn/SingIn";
import Cart from "./Componentes/pages/carrito/Cart";
import ContextComponente from "./Context/Context";
function App() {
  return (
    <BrowserRouter>
      <ContextComponente>
        <Routes>
          <Route element={<MenuResposiveContei />}>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/Checkout" element={<CheckoutContainer />} />
            <Route path="/SingIn" element={<SingInContainer />} />
            <Route path="/Shop" element={<ShopContainer />} />
            <Route path="/Shop/:categoryName" element={<ShopContainer />} />
            {/* <Route path="/Shop/Jackets" element={<JacketsContainer />} />
          <Route path="/Shop/Shoes" element={<ShoesContainer />} />
          <Route path="/Shop/Men" element={<MenContainer />} />
          <Route path="/Shop/Woman" element={<WomanContainer />} />
          <Route path="/Shop" element={<ShopContainer />} /> */}
          </Route>
          <Route path="*" element={<h2> Not -- Found</h2>} />
        </Routes>
      </ContextComponente>
    </BrowserRouter>
  );
}

export default App;
