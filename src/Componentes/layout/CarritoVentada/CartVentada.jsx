import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./CartVentana.css";
import { Context } from "../../../Context/Context";
import { useContext } from "react";

function CartVentada({ showCarrito }) {
  const { cart } = useContext(Context);

  return (
    <div>
      <div
        className="CartVentanaContenedor"
        style={{ display: showCarrito ? "block" : "none" }}
      >
        {cart.length === 0 ? (
          <h4
            style={{
              fontFamily: "Helvética",
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            Your Cart is Empty
          </h4>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <img
                style={{
                  height: "11vh",
                  width: "5vw",
                  maxHeight: "11vh",
                  maxWidth: "5vw",
                  objectFit: "cover",
                }}
                src={item.img}
                alt=""
              />

              <h4 style={{ fontFamily: "Helvética", marginLeft: "2vw" }}>
                {item.title}
              </h4>
              <h5>${item.price}</h5>
            </div>
          ))
        )}

        <Link to={"/Checkout"}>
          <button className="btnCheck">GO TO CHECKOUT</button>
        </Link>
      </div>
    </div>
  );
}

export default CartVentada;
