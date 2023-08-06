import MenuResponsive from "./MenuResponsive";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import CartVentada from "../CarritoVentada/CartVentada";
function MenuResposiveContei() {
  const [MenuResposive, setMenuResponsive] = useState(false);
  const showMenu = () => {
    setMenuResponsive(!MenuResposive);
  };
  const [showCarrito, setShowCarrito] = useState(false);
  const showCart = () => {
    setShowCarrito(!showCarrito);
  };

  return (
    <div>
      <MenuResponsive MenuResposive={MenuResposive} />
      <CartVentada showCarrito={showCarrito} />
      <Navbar showMenu={showMenu} showCart={showCart} />
      <Outlet />
    </div>
  );
}

export default MenuResposiveContei;
