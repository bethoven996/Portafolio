import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";

function CartaCheckOut({ item, cantidadEnCarrito = 1 }) {
  const { DeleteItem, agregarAlCarrito } = useContext(Context);
  const [contador, setcontador] = useState(cantidadEnCarrito);
  useEffect(() => {
    setcontador(cantidadEnCarrito);
  }, [cantidadEnCarrito]);
  debugger;

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
