import { Skeleton, Stack } from "@mui/material";
import { productos } from "../../../Productos/productMock";
import CartaProductos from "../../Comp/CartaProductos";
import { FadeLoader } from "react-spinners";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

function Shop({ items, agregarAlCarrito, EncontrarId }) {
  let arr = [1, 2, 3, 4, 5, 6];
  let CantidadEnCarrito = EncontrarId(items.id);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "20px",
      }}
    >
      {items.length > 0
        ? items.map((item) => {
            return (
              <CartaProductos
                agregarAlCarrito={agregarAlCarrito}
                item={item}
                key={item.id}
                CantidadEnCarrito={CantidadEnCarrito}
              />
            );
          })
        : arr.map((elemento) => (
            <Stack
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px",
              }}
              spacing={1}
              key={elemento}
            >
              <Skeleton variant="rectangular" width={240} height={225} />
              <Skeleton variant="rounded" width={240} height={90} />
            </Stack>
          ))}
    </div>
  );
}

export default Shop;

// arr.map((elemento) => )}

/* <Stack
              sx={{ display: "flex", justifyContent: "space-between" }}
              spacing={1}
              key={elemento}
            >
              <Skeleton variant="rectangular" width={210} height={140} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>; */
