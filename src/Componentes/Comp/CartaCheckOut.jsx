import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function CartaCheckOut({
  item,
  DeleteItem,
  EncontrarId,
  SumarTotal,
  setTotal,
}) {
  const [cantidad, setCantidad] = useState(EncontrarId(item.id));

  useEffect(() => {
    setTotal(SumarTotal());
  }, [SumarTotal()]);

  const restar = () => {
    setCantidad((prevCantidad) => prevCantidad - 1);
    item.cantidad = cantidad - 1;
  };

  const sumar = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
    item.cantidad = cantidad + 1;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ccc",
          padding: "10px",
          width: "80%",
          marginLeft: "10%",
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
          style={{ fontFamily: "Geneva", width: "15vw", textAlign: "center" }}
        >
          <div
            style={{
              fontFamily: "Geneva",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
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
            <h5>{cantidad}</h5>
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
        <div style={{ fontFamily: "Geneva", width: "10vw" }}>
          <p>${item.price}</p>
        </div>
        <div style={{ fontFamily: "Geneva", width: "10vw", zIndex: "1" }}>
          <Button onClick={() => DeleteItem(item.id)}>x</Button>
        </div>
      </div>
    </div>
  );
}

export default CartaCheckOut;
