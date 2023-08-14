import { useEffect, useState } from "react";
import CartaCheckOut from "../../Comp/CartaCheckOut";
import CartVentada from "../../layout/CarritoVentada/CartVentada";
import { Button } from "@mui/material";
import VentanaModal from "../../Comp/VentanaModal";
function Checkout({ AddToCart, cart, DeleteItem, SumarTotal, EncontrarId }) {
  const [total, setTotal] = useState(SumarTotal());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTotal(SumarTotal());
  }, [SumarTotal()]);

  if (cart.length === 0) {
    return (
      <div>
        <h2 style={{ textAlign: "center", fontFamily: "Helvética" }}>
          Your Carts is Empty
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            }}
            src="https://res.cloudinary.com/do9rcgcca/image/upload/v1691718830/img_sin_rende_jbhixi.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <div style={{ fontFamily: "Geneva", width: "10vw" }}>
            <p>Product</p>
          </div>
          <div style={{ fontFamily: "Geneva", width: "20vw" }}>
            <p>Title</p>
          </div>
          <div style={{ fontFamily: "Geneva", width: "15vw" }}>
            <p>Quantity</p>
          </div>
          <div style={{ fontFamily: "Geneva", width: "10vw" }}>
            <p>Price</p>
          </div>
          <div style={{ fontFamily: "Geneva", width: "10vw" }}>
            <p>Delete</p>
          </div>
        </div>
        {cart.map((item) => {
          return (
            <CartaCheckOut
              DeleteItem={DeleteItem}
              key={item.id}
              item={item}
              EncontrarId={EncontrarId}
              SumarTotal={SumarTotal}
              setTotal={setTotal}
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
          style={{
            fontFamily: "cursive",
            fontSize: "4vh",
            textAlign: "center",
          }}
        >
          Total: ${total}
          <Button
            onClick={handleShow}
            sx={{ margin: "10px" }}
            variant="contained"
          >
            Finalizar Compra
          </Button>
        </div>
      </div>
      <VentanaModal
        total={total}
        handleClose={handleClose}
        show={show}
        handleShow={handleShow}
        cart={cart}
      />
    </>
  );
}

export default Checkout;
