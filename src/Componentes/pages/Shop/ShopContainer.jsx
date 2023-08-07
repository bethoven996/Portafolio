import { useState, useEffect, useContext } from "react";
import Shop from "./Shop";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../Productos/dataBaseEcomer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Context } from "../../../Context/Context";
import { productos } from "../../../Productos/productMock";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartVentada from "../../layout/CarritoVentada/CartVentada";

function ShopContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const { cart, AddToCart, agregarAlCarrito, totalCantidad } =
    useContext(Context);

  useEffect(() => {
    let consulta;
    let ref = collection(dataBase, "productos");
    if (!categoryName) {
      consulta = ref;
    } else {
      consulta = query(ref, where("category", "==", categoryName));
    }
    getDocs(consulta).then((res) => {
      let newArr = res.docs.map((producto) => {
        return { ...producto.data(), id: producto.id };
      });
      setItems(newArr);
    });
  }, [categoryName]);

  return (
    <div>
      <Shop
        agregarAlCarrito={agregarAlCarrito}
        items={items}
        totalCantidad={totalCantidad}
      />
    </div>
  );
}
export default ShopContainer;
