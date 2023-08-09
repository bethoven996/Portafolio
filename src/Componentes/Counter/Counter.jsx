import { Button } from "@mui/material";
import { useState } from "react";

function Counter() {
  const [contador, setContador] = useState();

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
          disabled={contador <= 1}
          onClick={() => decrementar()}
          style={{
            width: "2vw",
            height: "3vh",
          }}
        >
          -
        </Button>
        <h5>{contador}</h5>
        <Button
          onClick={() => incrementar()}
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
