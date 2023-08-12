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
          <h5
            style={{
              fontFamily: "Helvética",
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            Your Cart is Empty
          </h5>
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
                  height: "9vh",
                  width: "4vw",
                  maxHeight: "11vh",
                  maxWidth: "5vw",
                  objectFit: "cover",
                }}
                src={item.img}
                alt=""
              />
              <h6
                style={{
                  fontFamily: "Helvética",
                  marginLeft: "2vw",
                  width: "3vw",
                }}
              >
                {item.title}
              </h6>
              <h6
                style={{
                  fontFamily: "Helvética",
                  marginLeft: "2vw",
                  width: "3vw",
                  marginTop: "2vh",
                }}
              >
                ${item.price}
              </h6>
            </div>
          ))
        )}

        <Link to={"/Checkout"}>
          <button style={{ height: "10vh" }} className="btnCheck">
            GO TO CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartVentada;
