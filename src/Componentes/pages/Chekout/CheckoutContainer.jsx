import Checkout from "./Checkout";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

function CheckoutContainer() {
  const { cart, DeleteItem, SumarTotal, EncontrarId } = useContext(Context);

  return (
    <div>
      <Checkout
        cart={cart}
        DeleteItem={DeleteItem}
        SumarTotal={SumarTotal}
        EncontrarId={EncontrarId}
      />
    </div>
  );
}

export default CheckoutContainer;
