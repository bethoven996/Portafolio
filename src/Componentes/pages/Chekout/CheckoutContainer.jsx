import Checkout from "./Checkout";

import CartaProductos from "../../Comp/CartaProductos";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import { useState } from "react";
function CheckoutContainer() {
  const {
    AddToCart,
    cart,
    DeleteItem,
    SumarTotal,
    EncontrarId,
    totalCantidad,
  } = useContext(Context);

  return (
    <div>
      <Checkout
        AddToCart={AddToCart}
        cart={cart}
        DeleteItem={DeleteItem}
        SumarTotal={SumarTotal}
        EncontrarId={EncontrarId}
        totalCantidad={totalCantidad}
      />
    </div>
  );
}

export default CheckoutContainer;
