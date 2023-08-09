import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import Counter from "../Counter/Counter";
function CartaCheckOut({ item, DeleteItem, AddToCart, onCantidadChange }) {
  console.log(item.cantidad);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        padding: "10px",
        width: "80%",
        marginLeft: "10%",
        height: "30vh",
      }}
    >
      <div style={{ fontFamily: "Geneva", width: "10vw" }}>
        <img
          src={item.img}
          alt={item.title}
          style={{ width: "100%", height: "90%", objectFit: "cover" }}
        />
      </div>
      <div style={{ fontFamily: "Geneva", width: "20vw" }}>
        <p>{item.title}</p>
      </div>
      <div>
        <Counter onCantidadChange={onCantidadChange} />
      </div>

      <div style={{ fontFamily: "Geneva", width: "10vw" }}>
        <p>${item.price}</p>
      </div>
      <div style={{ fontFamily: "Geneva", width: "10vw" }}>
        <Button onClick={() => DeleteItem(item.id)}>x</Button>
      </div>
    </div>
  );
}

export default CartaCheckOut;
