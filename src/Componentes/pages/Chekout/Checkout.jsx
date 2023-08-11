import { useEffect, useState } from "react";
import CartaCheckOut from "../../Comp/CartaCheckOut";
import CartVentada from "../../layout/CarritoVentada/CartVentada";
import { Button } from "@mui/material";
import PaymentForm from "../../layout/PasarelaPagos/PaymentForm";
function Checkout({ AddToCart, cart, DeleteItem, SumarTotal, EncontrarId }) {
  const [total, setTotal] = useState(SumarTotal());
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  useEffect(() => {
    setTotal(SumarTotal());
  }, [SumarTotal()]);

  if (cart.length === 0) {
    return (
      <div>
        <h2 style={{ textAlign: "center", fontFamily: "Helvética" }}>
          Your Carts is Empty
        </h2>
        <img
          style={{ display: "flex", marginLeft: "27%" }}
          src="https://res.cloudinary.com/do9rcgcca/image/upload/v1691718830/img_sin_rende_jbhixi.jpg"
          alt=""
        />
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "7vw",
            marginRight: "8vw",
          }}
        >
          <p>Product</p>
        </div>
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "1vw",
            marginRight: "7vw",
          }}
        >
          <p>Title</p>
        </div>
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "5vw",
            marginRight: "4vw",
          }}
        >
          <p>Quantity</p>
        </div>
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "5vw",
            marginRight: "4vw",
          }}
        >
          <p>Price</p>
        </div>
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "5vw",
            marginRight: "4vw",
          }}
        >
          <p>Delete</p>
        </div>
      </div>
      {cart.map((item) => {
        return (
          <CartaCheckOut
            AddToCart={AddToCart}
            DeleteItem={DeleteItem}
            key={item.id}
            item={item}
            EncontrarId={EncontrarId}
            SumarTotal={SumarTotal}
          />
        );
      })}

      <h2
        style={{
          fontFamily: "Helvetica",
          display: "flex",
          justifyContent: "center",
          marginLeft: "20%",
        }}
      ></h2>
      <div
        className="ContenedorTotal"
        style={{ fontFamily: "cursive", fontSize: "4vh", textAlign: "center" }}
      >
        Total: ${total}
        <Button
          onClick={() => setShowPaymentForm(true)}
          sx={{ margin: "10px" }}
          variant="contained"
        >
          Finalizar Compra
        </Button>
      </div>
      {showPaymentForm && <PaymentForm />}
    </div>
  );
}

export default Checkout;
