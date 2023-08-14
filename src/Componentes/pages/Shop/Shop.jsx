import { Skeleton, Stack } from "@mui/material";
import CartaProductos from "../../Comp/CartaProductos";

function Shop({ items, agregarAlCarrito, EncontrarId }) {
  const CantidadEnCarrito = EncontrarId(items.id);
  let arr = [1, 2, 3, 4, 5, 6];
  const categorias = {};
  items.forEach((item) => {
    if (!categorias[item.category]) {
      categorias[item.category] = [];
    }
    categorias[item.category].push(item);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {Object.entries(categorias).map(([categoria, productosCategoria]) => (
        <div
          key={categoria}
          style={{
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              fontFamily: "Courier New",
              marginTop: "10px",
              textAlign: "center",
              fontSize: "10vh",
              textDecoration: "underline",
            }}
          >
            {categoria}
          </h1>
          {items.length === 0 ? (
            arr.map((elemento) => (
              <Stack
                sx={{
                  display: "flex",
                  margin: "10px",
                  justifyContent: "flex-start",
                  marginLeft: "30vw",
                }}
                spacing={1}
                key={elemento}
              >
                <Skeleton variant="rectangular" width={240} height={225} />
                <Skeleton variant="rounded" width={240} height={90} />
              </Stack>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {productosCategoria.map((producto) => (
                <CartaProductos
                  agregarAlCarrito={agregarAlCarrito}
                  item={producto}
                  key={producto.id}
                  CantidadEnCarrito={CantidadEnCarrito}
                />
              ))}
            </div>
          )}
        </div>
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
