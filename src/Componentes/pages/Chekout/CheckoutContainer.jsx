import Checkout from "./Checkout";

import CartaProductos from "../../Comp/CartaProductos";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import { useState } from "react";
function CheckoutContainer() {
  const { AddToCart, cart, DeleteItem, SumarTotal } = useContext(Context);

  return (
    <div>
      <Checkout cart={cart} DeleteItem={DeleteItem} SumarTotal={SumarTotal} />
    </div>
  );
}

export default CheckoutContainer;
