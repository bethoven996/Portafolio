import Counter from "./Counter";
import { useState } from "react";
function CounterContainer() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <Counter contador={contador} setContador={setContador} />
    </div>
  );
}

export default CounterContainer;
