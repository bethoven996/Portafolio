import { dataBase } from "../Productos/dataBaseEcomer";
import { addDoc, collection } from "firebase/firestore";
import { productos } from "../Productos/productMock";
import { Button } from "@mui/material";
function Admin() {
  const rellenar = () => {
    let refColection = collection(dataBase, "productos");
    productos.forEach((produc) => {
      addDoc(refColection, produc);
    });
  };
  return (
    <>
      <Button onClick={rellenar}> RELLENAR</Button>
    </>
  );
}

export default Admin;
