import { Button } from "@mui/material";
import "./MenuResponsive.css";
import { Link } from "react-router-dom";

function MenuResponsive({ MenuResposive, setMenuResponsive }) {
  const Close = () => {
    if (MenuResposive === true) {
      return setMenuResponsive(false);
    }
  };
  return (
    <div>
      <div
        className="ContenedorResposive"
        style={{ display: MenuResposive ? "flex" : "none" }}
      >
        <Link to={"/"}>
          <Button
            onClick={() => Close()}
            sx={{
              fontFamily: "cursive",
              margin: "5px",
              width: "90%",
              height: "30px",
              color: "black",
              border: "solid 1px black",
              marginLeft: "10px",
            }}
          >
            HOME
          </Button>
        </Link>
        <Link to={"/Shop"}>
          <Button
            onClick={() => Close()}
            sx={{
              fontFamily: "cursive",
              margin: "5px",
              width: "90%",
              height: "30px",
              color: "black",
              border: "solid 1px black",
              marginLeft: "10px",
            }}
          >
            SHOP
          </Button>
        </Link>
        <Link to={"/SingIn"}>
          <Button
            onClick={() => Close()}
            sx={{
              fontFamily: "cursive",
              margin: "5px",
              width: "90%",
              height: "30px",
              color: "black",
              border: "solid 1px black",
              marginLeft: "10px",
            }}
          >
            SING-IN
          </Button>
        </Link>
        <Link to={"/Checkout"}>
          <Button
            onClick={() => Close()}
            sx={{
              fontFamily: "cursive",
              marginLeft: "14px",
              marginTop: "8vh",
              backgroundColor: "black",
              border: "solid 1px black",
            }}
          >
            GO TO CHECKOUT
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MenuResponsive;
