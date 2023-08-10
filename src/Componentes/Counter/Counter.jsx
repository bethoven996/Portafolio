import { useState, useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { Context } from "../../Context/Context";

function Counter({ item, CantidadEnCarrito = 1 }) {
  const restar = () => {
    item.cantidad = item.cantidad - 1;
    console.log(item.cantidad);
  };

  const sumar = () => {
    item.cantidad = item.cantidad + 1;
    console.log(item.cantidad);
  };
  let total = sumar();
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
          disabled={item.cantidad <= 1}
          onClick={restar}
          style={{
            width: "2vw",
            height: "3vh",
          }}
        >
          -
        </Button>
        <h5>{item.cantidad}</h5>
        <Button
          onClick={sumar}
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
