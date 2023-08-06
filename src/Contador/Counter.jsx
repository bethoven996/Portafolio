import { Button } from "@mui/material";

function Counter({ contador, setContador }) {
  return (
    <div
      style={{
        width: "35vw",
        height: "10vh",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Button
        disabled={contador <= 1}
        onClick={() => setContador(contador - 1)}
        variant="contained"
      >
        -
      </Button>
      <h2>{contador}</h2>
      <Button onClick={() => setContador(contador + 1)} variant="contained">
        +
      </Button>
    </div>
  );
}

export default Counter;
