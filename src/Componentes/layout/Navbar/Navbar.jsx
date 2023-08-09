import { Box, Button } from "@mui/material";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Admin from "../../admin";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
function Navbar({ showMenu, showCart }) {
  const { cart } = useContext(Context);
  return (
    <div className="Navbar">
      <Link to={"/"}>
        <img
          className="imgLogo"
          src="https://res.cloudinary.com/do9rcgcca/image/upload/v1690227475/logoFinal_tl7kaf.png"
        />
      </Link>
      <div className="searchContainer">
        <input
          className="inputSearch"
          type="text"
          placeholder="Search Products ej: Shoes"
        />
        <SearchIcon sx={{ fontSize: "30px" }} className="searchIcon" />
      </div>
      <div className="ButtonCoteiner">
        <Link to={"/Shop"}>
          <Button
            sx={{
              fontFamily: "Gill Sans",
              color: "black",
            }}
          >
            SHOP
          </Button>
        </Link>
        <Link to={"/Checkout"}>
          <Button
            sx={{
              fontFamily: "Gill Sans",
              color: "black",
            }}
          >
            CHECKOUT
          </Button>
        </Link>
        <Link to={"/SingIn"}>
          <Button
            sx={{
              fontFamily: "Gill Sans",
              color: "black",
            }}
          >
            SING-IN
          </Button>
        </Link>
      </div>
      <div onClick={showMenu} className="menuResponsive">
        <MenuIcon />
      </div>
      <Box onClick={showCart} sx={{ display: "flex", alignItems: "center" }}>
        <Badge badgeContent={cart.length} color="success">
          <LocalMallIcon
            sx={{ fontSize: "35px", cursor: "pointer" }}
          ></LocalMallIcon>
        </Badge>
      </Box>
    </div>
  );
}

export default Navbar;