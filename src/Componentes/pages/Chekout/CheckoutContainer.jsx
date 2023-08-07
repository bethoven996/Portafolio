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
    totalCantidad,
    EncontrarId,
  } = useContext(Context);

  return (
    <div>
      <Checkout
        AddToCart={AddToCart}
        cart={cart}
        DeleteItem={DeleteItem}
        SumarTotal={SumarTotal}
        totalCantidad={totalCantidad}
        EncontrarId={EncontrarId}
      />
    </div>
  );
}

export default CheckoutContainer;
