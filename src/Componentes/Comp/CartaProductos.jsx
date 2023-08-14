import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function CartaProductos({ item, agregarAlCarrito, CantidadEnCarrito = 1 }) {
  return (
    <div
      style={{
        marginLeft: "10vw",
        display: "flex",
        justifyContent: "space-between",
        marginRight: "-10vw",
      }}
    >
      <Card
        sx={{
          width: 250,
          margin: "15px",
          backgroundColor: "rgb(241, 245, 248)",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              backgroundSize: "100% auto",
              width: "100%",
              height: 140,
              objectFit: "cover",
              transform: "scale(1)",
            }}
            image={item.img}
          />
          <CardContent>
            <Typography
              sx={{ fontFamily: "Gill Sans" }}
              gutterBottom
              variant="h5"
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => {
              agregarAlCarrito(item, CantidadEnCarrito);
            }}
            size="small"
          >
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CartaProductos;
