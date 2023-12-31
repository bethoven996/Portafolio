import MenuResposiveContei from "./Componentes/layout/MenuResponsive/MenuResposiveContei";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./Componentes/pages/inicio/HomeContainer";
import "./App.css";
import SingInContainer from "./Componentes/pages/SingIn/SingInContainer";
import ShopContainer from "./Componentes/pages/Shop/ShopContainer";
import CheckoutContainer from "./Componentes/pages/Chekout/CheckoutContainer";
import ContextComponente from "./Context/Context";
import NotFound from "./Componentes/layout/NotFound/NotFound";
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
          </Route>
        </Routes>
      </ContextComponente>
    </BrowserRouter>
  );
}

export default App;
