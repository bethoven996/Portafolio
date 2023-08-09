import { Button } from "@mui/material";
import { useState } from "react";
import Counter from "../Counter/Counter";
function CartaCheckOut({ item, DeleteItem, EncontrarId, agregarAlCarr }) {
  let CantidadEnCarrito = EncontrarId(item.id);
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
        <Counter
          item={item}
          agregarAlCarr={agregarAlCarr}
          CantidadEnCarrito={CantidadEnCarrito}
        />
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
