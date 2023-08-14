import { useState, useEffect, useContext } from "react";
import Shop from "./Shop";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../Productos/dataBaseEcomer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Context } from "../../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShopContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const { cart, AddToCart, EncontrarId } = useContext(Context);
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

  const agregarAlCarrito = (item, cantidad = 1) => {
    let data = {
      ...item,
      cantidad: cantidad,
    };
    AddToCart(data);
    toast.success("Added to cart successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <Shop
        agregarAlCarrito={agregarAlCarrito}
        items={items}
        EncontrarId={EncontrarId}
      />
      <ToastContainer />
    </div>
  );
}
export default ShopContainer;
