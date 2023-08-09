import { createContext, useState } from "react";
export const Context = createContext();

function ContextComponente({ children }) {
  const [cart, setCart] = useState([]);
  const [contador, setContador] = useState(1);
  const AddToCart = (producto) => {
    let existe = cart.some((elemento) => elemento.id === producto.id);
    if (existe) {
      let nuevoArr = cart.map((elemento) => {
        if (producto.id === elemento.id) {
          return {
            ...elemento,
            cantidad: elemento.cantidad + producto.cantidad,
          };
        } else {
          return elemento;
        }
      });
      setCart(nuevoArr);
    } else {
      setCart([...cart, { ...producto, cantidad: producto.cantidad }]);
    }
  };
  const DeleteItem = (id) => {
    let newArr = cart.filter((item) => item.id !== id);
    setCart(newArr);
  };

  const totalCantidad = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  };
  const SumarTotal = () => {
    let precio = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.cantidad;
    }, 0);

    return precio;
  };
  const EncontrarId = (id) => {
    let producto = cart.find((elemento) => elemento.id === +id);
    return producto?.cantidad;
  };

  let data = {
    contador,
    setContador,
    cart,
    AddToCart,
    DeleteItem,
    totalCantidad,
    SumarTotal,
    EncontrarId,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export default ContextComponente;
