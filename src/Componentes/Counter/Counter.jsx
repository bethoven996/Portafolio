import { useState, useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { Context } from "../../Context/Context";

function Counter({ item, CantidadEnCarrito = 1 }) {
  const { agregarAlCarr } = useContext(Context);
  const [contador, setContador] = useState(CantidadEnCarrito);
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
      agregarAlCarr(item, contador);
    }
  };

  const sumar = () => {
    setContador(contador + 1);
    agregarAlCarr(item, contador);
  };
  console.log(item);

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
          // disabled={contador <= 1}
          onClick={() => restar()}
          style={{
            width: "2vw",
            height: "3vh",
          }}
        >
          -
        </Button>
        <h5>{item.cantidad}</h5>
        <Button
          onClick={() => sumar()}
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
