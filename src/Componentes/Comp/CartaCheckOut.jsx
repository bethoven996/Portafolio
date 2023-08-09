import { Button } from "@mui/material";
import { useState } from "react";

function CartaCheckOut({ item, DeleteItem, AddToCart }) {
  const [contador, setcontador] = useState(1);

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
          disabled={contador <= 1}
          onClick={() => {
            AddToCart({ ...item, cantidad: contador - 1 });
            setcontador(contador - 1);
          }}
          style={{
            width: "2vw",
            height: "3vh",
          }}
        >
          -
        </Button>
        <h5>{contador}</h5>
        <Button
          onClick={() => {
            AddToCart({ ...item, cantidad: contador + 1 });
            setcontador(contador + 1);
          }}
          style={{
            width: "2vw",
            height: "3vh",
          }}
        >
          +
        </Button>
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
