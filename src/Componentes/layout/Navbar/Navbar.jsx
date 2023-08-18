import { Box, Button } from "@mui/material";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../../../Context/Context";
import { useState } from "react";
import { dataBase } from "../../../Productos/dataBaseEcomer";
import { getDocs, collection } from "firebase/firestore";
import Swal from "sweetalert2";

function Navbar({ showMenu, showCart }) {
  const { cart } = useContext(Context);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleSearchSubmit = async (event) => {
    if (event.key === "Enter") {
      const trimmedInputValue = inputValue.trim().toLowerCase();
      setInputValue(trimmedInputValue);

      let ref = collection(dataBase, "productos");
      const res = await getDocs(ref);
      let newArray = res.docs.map((item) => {
        return { ...item.data() };
      });
      const categoriesArray = newArray.map((elemento) => elemento.category);
      let categoriasFiltradas = categoriesArray.filter(
        (producto) => producto === trimmedInputValue
      );

      if (categoriasFiltradas.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `We did not find any category with that name "${inputValue}"`,
        });
      } else {
        navigate(`/Shop/${trimmedInputValue}`);
      }
    }
  };
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
          placeholder="Search eg: shoes"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSearchSubmit}
        />

        <Link to={`Shop/${inputValue}`}>
          <SearchIcon sx={{ fontSize: "30px" }} className="searchIcon" />
        </Link>
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
