import { useState, useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { Context } from "../../Context/Context";

function Counter({ item }) {
  const { EncontrarId, totalCantidad } = useContext(Context);
  const [cantidad, setCantidad] = useState(item.cantidad);
  const sumar = () => {
    cantidad = item.cantidad;
    setCantidad(cantidad + 1);
  };
  return (
    <div>
      <div
        style={{
          fontFamily: "Geneva",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "15vw",
        }}
      >
        <Button
          disabled={cantidad <= 1}
          onClick={() => {
            setCantidad(cantidad - 1), console.log(item);
          }}
          style={{
            width: "2vw",
            height: "3vh",
          }}
        >
          -
        </Button>
        <h5>{cantidad}</h5>
        <Button
          onClick={() => {
            sumar, console.log(item);
          }}
          style={{
            width: "2vw",
            height: "3vh",
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default Counter;
