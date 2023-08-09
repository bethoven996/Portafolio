import CartaCheckOut from "../../Comp/CartaCheckOut";
import CartVentada from "../../layout/CarritoVentada/CartVentada";
function Checkout({
  AddToCart,
  cart,
  DeleteItem,
  SumarTotal,
  EncontrarId,
  agregarAlCarr,
}) {
  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", fontFamily: "Helvética" }}>
        Your Carts is Empty
      </h2>
    );
  }

  const total = SumarTotal();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "7vw",
            marginRight: "8vw",
          }}
        >
          <p>Product</p>
        </div>
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "1vw",
            marginRight: "7vw",
          }}
        >
          <p>Title</p>
        </div>
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "5vw",
            marginRight: "4vw",
          }}
        >
          <p>Quantity</p>
        </div>
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "5vw",
            marginRight: "4vw",
          }}
        >
          <p>Price</p>
        </div>
        <div
          style={{
            fontFamily: "Geneva",
            marginLeft: "5vw",
            marginRight: "4vw",
          }}
        >
          <p>Delete</p>
        </div>
      </div>
      {cart.map((item) => {
        return (
          <CartaCheckOut
            AddToCart={AddToCart}
            DeleteItem={DeleteItem}
            key={item.id}
            item={item}
            EncontrarId={EncontrarId}
            agregarAlCarr={agregarAlCarr}
          />
        );
      })}

      <h2
        style={{
          fontFamily: "Helvetica",
          display: "flex",
          justifyContent: "center",
          marginLeft: "20%",
        }}
      >
        TOTAL:{total} $
      </h2>
    </div>
  );
}

export default Checkout;
